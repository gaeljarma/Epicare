import { StyleSheet, View, Image } from "react-native";
import { BlurView } from 'expo-blur';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <BlurView intensity={40}>
                <View style={styles.statusBar} />
            </BlurView>
            <View style={styles.imagesContainer}>
                <Image source={require("../../assets/bordeIzqSup.png")} />
                <Image source={require("../../assets/bordeDerechoInferior.png")} style={styles.imageRigth} />
            </View>

            <View style={styles.navBar}>
                <Image source={require("../../assets/logo.png")} style={styles.logo} />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    statusBar: {
        height: 40,
        backgroundColor: "#4B1C71",
    },
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#EDD8ED"
    },
    imagesContainer: {
        flex: 1,
        justifyContent: "space-between",
        height: "100%",
    },
    imageRigth: {
        marginLeft: "10%",
    },
    navBar: {
        height: 90,
        alignItems: "center",
        backgroundColor: "#4B1C71",
    },
    logo: {
        position: "absolute",
        top: -30,
    }
})