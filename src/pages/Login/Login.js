import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Eye, EyeOff } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary } from "../../components/Buttons/Buttons";
import { styles } from "./Login.styles";

export function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Validação básica do e-mail
        if (!email.includes("@") || !email.includes(".")) {
            Alert.alert("E-mail inválido", "Por favor, digite um e-mail válido contendo '@' e '.'.");
            return;
        }

        // Validação da senha
        if (password.length < 8) {
            Alert.alert("Senha inválida", "A senha deve ter no mínimo 8 caracteres.");
            return;
        }

        try {
            // Executa a navegação para a área logada
            navigation.navigate("MainApp");
        } catch (error) {
            Alert.alert("Erro de Navegação", "Não foi possível carregar a tela principal. Verifique o arquivo BottomTabs.");
            console.error(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <ArrowLeft size={20} color="#000000" />
                </TouchableOpacity>

                <Text style={styles.title}>Entrar</Text>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu e-mail cadastrado"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#A0A0A0"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Senha</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Sua senha"
                            secureTextEntry={!showPassword}
                            placeholderTextColor="#A0A0A0"
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff size={20} color="#707070" /> : <Eye size={20} color="#707070" />}
                        </TouchableOpacity>
                    </View>
                </View>

                <ButtonPrimary text="Entrar" onPress={handleLogin} />

                <TouchableOpacity style={styles.footerLink} onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.footerText}>
                        Não tem conta? <Text style={styles.linkBold}>Criar conta</Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}