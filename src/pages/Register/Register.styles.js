// Register.styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDFBF7", // Fundo bege claro do Figma
    },
    scrollContent: {
        paddingHorizontal: 25,
        paddingTop: 10,
        paddingBottom: 30,
    },
    backButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontFamily: "serif",
        color: "#1E1E1E",
        marginBottom: 25,
    },
    formGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 13,
        color: "#333333",
        marginBottom: 6,
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        paddingHorizontal: 18,
        fontSize: 14,
        color: "#333333",
        borderWidth: 1,
        borderColor: "#EFEFEF",
    },
    passwordContainer: {
        width: "100%",
        height: 50,
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        paddingHorizontal: 18,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#EFEFEF",
    },
    passwordInput: {
        flex: 1,
        height: "100%",
        fontSize: 14,
        color: "#333333",
    },
    footerLink: {
        marginTop: 20,
        alignSelf: "center",
    },
    footerText: {
        fontSize: 13,
        color: "#666666",
    },
    linkBold: {
        fontWeight: "bold",
        color: "#333333",
        textDecorationLine: "underline",
    },
});