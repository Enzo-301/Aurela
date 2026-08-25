import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Buttons.styles";

export function ButtonPrimary({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.buttonPrimary} onPress={onPress}>
            <Text style={styles.buttonPrimaryText}>{text}</Text>
        </TouchableOpacity>
    );
}

export function ButtonOutline({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.buttonOutline} onPress={onPress}>
            <Text style={styles.buttonOutlineText}>{text}</Text>
        </TouchableOpacity>
    );
}