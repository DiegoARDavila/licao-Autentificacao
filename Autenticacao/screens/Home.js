import {View, Text, Button, Alert, StyleSheet} from "react-native";
import {sair} from '../services/AuthService';
import { auth } from "../config/firebase";

export default function App({navigation}){
    async function realizarLogout() {
        await sair()
        navigation.navigate('Login')
    }

return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Seja Bem Vindo</Text>
        <Text style={styles.texto}>Usuário: {auth.currentUser?.email}</Text>
        <Button
            title="Sair"
            onPress={realizarLogout}
            style={styles.botao}
        />
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 10,
    },

    texto: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },

    botao: {
        backgroundColor: '#1e1f1a',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
    },

    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
