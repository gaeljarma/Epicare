import React, { useEffect, useState } from "react";
import EmergencyContact from "../components/EmergencyContact";
import { Text, View } from "react-native";

function profile() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      // OBTENER LA INFORMACION DEL USUARIO.

      setUserInfo({}); // INFO DEL USUARIO ACA
      setLoading(false);
    };

    fetchUserInfo();
  }, []);

  if (loading) {
    return <Text>Loading</Text>;
  }

  return (
    <View className="h-full w-full bg-[#E7C1E88A] justify-center items-center">
      <EmergencyContact
        profile={""}
        hasNote={false}
        name={userInfo.name}
        phone={userInfo.phone}
        email={userInfo.email}
      />
    </View>
  );
}

export default profile;
