// Login.js
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Eye, EyeOff } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary } from "../../components/Buttons/Buttons";
import { styles } from "./Login.styles";

export function Login() {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
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
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff size={20} color="#707070" /> : <Eye size={20} color="#707070" />}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.forgotPasswordButton}>
                        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>

                <ButtonPrimary text="Entrar" onPress={() => {}} />

                <TouchableOpacity style={styles.footerLink} onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.footerText}>
                        Não tem conta? <Text style={styles.linkBold}>Criar conta</Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}