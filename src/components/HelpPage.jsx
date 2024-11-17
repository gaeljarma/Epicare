import { Pressable, View, Text, ScrollView } from "react-native";
import ShareButton from "./ShareButton";
import { Image } from "react-native";
import { router } from "expo-router";
function Help() {
  const call = `
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
  const callList = call.split("- ");
  const instructions = `
    - Mantenga la calma
    - Desaloje el área de objetos duros o peligrosos para evitar que la persona se golpee o dañe
    - De ser posible tome el tiempo de la convulsión
    - Si la persona que sufre la crisis usa anteojos, quíteselos
    - Aflójele la ropa que lleve alrededor del cuello y la cabeza
    - Coloque a la persona de costado para facilitar la respiración y mantener las vías aéreas libres y que la saliva caiga de su boca
    - Coloque algo plano y suave bajo su cabeza
    - Permanezca con la persona hasta que la crisis haya terminado naturalmente, asegurándose de que vuelva la conciencia.
    - Cuando la persona recupere la conciencia y la crisis haya terminado, ayúdele a encontrar un lugar para descansar y recuperar su orientación

    `;

  const instructionsList = instructions.split("- ");
  return (
    <View className="h-full w-full bg-[#E7C1E88A] ">
      <View className="py-2 px-4 w-fullflex justify-between flex-row items-center">
        <Pressable onPress={() => router.navigate("/app")}>
          <Image source={require("../assets/back.png")} />
        </Pressable>
        <Text className="text-3xl font-bold my-4 text-[#4B1C71]"> Ayuda </Text>
        <ShareButton />
      </View>
      <ScrollView className="px-4 flex flex-col">
        <View>
          <Text className="text-[#6F26AB] font-bold text-2xl text-center -mb-6">
            Llamar al 911 si:
          </Text>
          {callList.map((item, index) => (
            <Text
              key={index}
              className="text-[#7F4CA5] font-bold text-xl text-center"
            >
              {item}
            </Text>
          ))}
        </View>
        <View className="mt-10">
          <Text className="text-[#6F26AB] font-bold text-2xl text-center -mb-6">
            Instrucciones a seguir en caso de una convulsión:
          </Text>
          {instructionsList.map((item, index) => (
            <Text
              key={index}
              className="text-[#7F4CA5] font-bold text-xl text-center"
            >
              {item}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Help;
