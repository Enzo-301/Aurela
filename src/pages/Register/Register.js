import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Eye, EyeOff } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary } from "../../components/Buttons/Buttons";
import { styles } from "./Register.styles";

export function Register() {
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = () => {
        if (!email.includes("@") || !email.includes(".")) {
            Alert.alert("E-mail inválido", "Por favor, digite um e-mail válido contendo '@' e '.'.");
            return;
        }

        if (password.length < 8) {
            Alert.alert("Senha muito curta", "A senha deve ter no mínimo 8 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Senhas divergentes", "As senhas digitadas não são iguais.");
            return;
        }

        Alert.alert("Sucesso!", "Conta criada com sucesso.");
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <ArrowLeft size={20} color="#000000" />
                </TouchableOpacity>

                <Text style={styles.title}>Criar conta</Text>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Nome completo</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Ana Silva"
                        placeholderTextColor="#A0A0A0"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ana.silva@gmail.com"
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
                            placeholder="Escolha uma senha forte"
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

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Confirmar senha</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Digite a senha novamente"
                            secureTextEntry={!showConfirmPassword}
                            placeholderTextColor="#A0A0A0"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <EyeOff size={20} color="#707070" /> : <Eye size={20} color="#707070" />}
                        </TouchableOpacity>
                    </View>
                </View>

                <ButtonPrimary text="Cadastrar" onPress={handleRegister} />

                <TouchableOpacity style={styles.footerLink} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.footerText}>
                        Já tem conta? <Text style={styles.linkBold}>Entrar</Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}