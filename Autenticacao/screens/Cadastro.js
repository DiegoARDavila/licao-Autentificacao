import { useState } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, TurboModuleRegistry } from "react-native";
import { Cadastrar } from "../services/AuthService";

export default function App({navigation}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    async function realizarCadastro() {
        if(!email || !senha){
            alert('Preencha todos os campos.')
            return;
        }

        setCarregando(true);
        try{
            await Cadastrar(email, senha);
            alert('O usuário foi cadastrado com sucesso')
            navigation.navigate('Home');
        }
        catch(error){
            alert('Não foi possível realizar o cadastro');
            console.log(error);
        }
        finally{
            setCarregando(false);
        }
        
    }


return (
    <View style={styles.container}>
        <View style={styles.cadBox}>
            <Text style={styles.titulo}>Crie sua conta</Text>
            
            <View style={styles. InputBox}>
                <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                />
                <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                />
            </View>
            <TouchableOpacity style={styles.btnLogin} onPress={realizarCadastro} disabled={carregando}>
            {carregando ? (
            <ActivityIndicator color="#fff" />
            ): (
                <Text style={styles.btnLoginText}>Cadastrar</Text>
            )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.footer}>Já possui uma conta? <Text style={styles.spnFooter}>Faça Login</Text></Text>
            </TouchableOpacity>
        </View>
    </View>
);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef2f6',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },

    cadBox: {
        width: '92%',
        maxWidth: 380,
        backgroundColor: '#fff',
        paddingHorizontal: 22,
        paddingVertical: 28,
        borderRadius: 12,
        alignItems: 'stretch',
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 5,
    },

    titulo: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1f2937',
        textAlign: 'center',
        marginBottom: 4,
    },

    inputBox: {
        width: '100%',
        marginTop: 18,
        marginBottom: 10,
    },

    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#cbd5e1',
        borderRadius: 7,
        paddingHorizontal: 12,
        paddingVertical: 13,
        marginBottom: 11,
        fontSize: 16,
        backgroundColor: '#f8fafc',
        color: '#1f2937',
    },

    btnLogin: {
        width: '100%',
        backgroundColor: '#1e1f1a',
        paddingVertical: 13,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
    },

    btnLoginText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '700',
    },

    footer: {
        color: '#64748b',
        fontSize: 13,
        marginTop: 18,
        textAlign: 'center',
    },

    spnFooter: {
        color: '#f52c4e',
        fontWeight: '700',
    },
});
