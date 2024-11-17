import { Pressable, View } from "react-native";

function Help() {
  const message = "Hola, estoy compartiendo este mensaje desde mi app!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

  const shareToWhatsApp = async () => {
    try {
      const supported = await Linking.canOpenURL(whatsappUrl);
      if (!supported) {
        Alert.alert(
          "Error",
          "WhatsApp no está disponible en este dispositivo."
        );
        return;
      }
      await Linking.openURL(whatsappUrl);
    } catch (error) {
      Alert.alert("Error", "Hubo un problema al abrir WhatsApp.");
    }
  };
  return (
    <View className="h-full w-full bg-[#E7C1E88A] ">
      <Pressable onPress={shareToWhatsApp}>Compartir</Pressable>
    </View>
  );
}

export default Help;
