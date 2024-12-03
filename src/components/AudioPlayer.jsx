import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
export default function AudioPlayer({ sound }) {
  const [audioObject, setAudioObject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const loadAudio = async () => {
      if (audioObject) {
        await audioObject.unloadAsync(); // Descargar audio previo
      }
      const { sound: newSound } = await Audio.Sound.createAsync(sound);
      setAudioObject(newSound);
      setIsPlaying(false);

      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setProgress(status.positionMillis);
          setDuration(status.durationMillis || 0);
        }
      });
    };

    loadAudio();
  }, [sound]);

  const togglePlayback = async () => {
    if (audioObject) {
      if (isPlaying) {
        await audioObject.pauseAsync();
      } else {
        await audioObject.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <View className="w-full h-full px-4 flex gap-1 flex-row">
      <Pressable onPress={togglePlayback} className=" h-2aspect-square items-center justify-center">
        {isPlaying ? (
          <Image source={require("../assets/pause.png")} />
        ) : (
          <Image source={require("../assets/play.png")} />

        )}
      </Pressable>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={progress}
        minimumTrackTintColor="#7F4CA5" // Color del progreso (púrpura)
        maximumTrackTintColor="#C1B9C1" // Color del fondo (gris claro)
        thumbTintColor="#7F4CA5" // Color del círculo (azul claro)
        onSlidingComplete={async (value) =>
          audioObject && (await audioObject.setPositionAsync(value))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    width: "100%",
    height: 40,
  },
});
