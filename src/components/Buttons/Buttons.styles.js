import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonPrimary: {
        width: "100%",
        height: 50,
        backgroundColor: "#567655", // Verde do Figma
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    buttonPrimaryText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
    buttonOutline: {
        width: "100%",
        height: 50,
        backgroundColor: "transparent",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12,
    },
    buttonOutlineText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
});