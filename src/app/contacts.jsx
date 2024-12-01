import React from "react";
import { View } from "react-native";
import EmergencyContact from "../components/EmergencyContact";
import { router, useLocalSearchParams } from "expo-router";


function Login() {
  const { name,note, profile, phone, email } = useLocalSearchParams();

  return (
    <View className="h-full w-full bg-[#E7C1E88A] justify-center items-center">
        <EmergencyContact name={name} phone={phone} email={email} note={note} profile={profile}/>
    </View>

  )
}

export default Login;
