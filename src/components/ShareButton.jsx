import { Pressable, View, Text, Image } from "react-native";
import { Linking } from "react-native";

function Help() {
  const message = `
  Llamar al 911 si:
    - La crisis dure más de 5 minutos
    - No exista certeza de que la persona ya tenía el diagnóstico de epilepsia
    - Si hay una recuperación lenta y se presenta una segunda crisis o se dificulta la respiración después de la convulsión
    - Si la persona está embarazada
    - Si la persona cuenta con una identificación de alguna otra alteración o enfermedad importante
    - Si hay signos de daño en cualquier parte del cuerpo o en la cabeza
    - Si la persona tiene diabetes
    - Si la persona tiene fiebre alta
    - Si la persona está embarazada
    - Si la persona cuenta con una identificación de alguna otra alteración o enfermedad importante
    - Si hay signos de daño en cualquier parte del cuerpo o en la cabeza
    - Si la persona tiene diabetes
    - Si la persona tiene fiebre alta`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

  const shareToWhatsApp = async () => {
    try {
      const supported = await Linking.canOpenURL(whatsappUrl);
      if (!supported) {
        alert("Error", "WhatsApp no está disponible en este dispositivo.");
        return;
      }
      await Linking.openURL(whatsappUrl);
    } catch (error) {
      alert("Error", "Hubo un problema al abrir WhatsApp.");
    }
  };
  return (
    <Pressable onPress={shareToWhatsApp}>
      <Image source={require("../assets/compartir.png")} />
    </Pressable>
  );
}

export default Help;
