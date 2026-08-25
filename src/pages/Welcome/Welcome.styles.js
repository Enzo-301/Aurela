// Welcome.styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)", // Overlay leve para leitura do texto
        justifyContent: "flex-end",
        paddingHorizontal: 25,
        paddingBottom: 40,
    },
    content: {
        alignItems: "center",
        width: "100%",
    },
    title: {
        fontSize: 40,
        color: "#FFFFFF",
        fontFamily: "serif", // Ou ajuste para a fonte customizada do seu projeto
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: "#E0E0E0",
        marginBottom: 30,
        textAlign: "center",
    },
    buttonContainer: {
        width: "100%",
    },
});