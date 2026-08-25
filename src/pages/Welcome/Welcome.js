import { ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary, ButtonOutline } from "../../components/Buttons/Buttons";
import { styles } from "./Welcome.styles";

export function Welcome() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require("../../../assets/images/welcome-bg.jpg")}
            style={styles.backgroundImage}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Aurela</Text>
                    <Text style={styles.subtitle}>Descubra o seu melhor momento.</Text>

                    <View style={styles.buttonContainer}>
                        <ButtonPrimary
                            text="Criar conta"
                            onPress={() => navigation.navigate("Register")}
                        />
                        <ButtonOutline
                            text="Entrar"
                            onPress={() => navigation.navigate("Login")}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}