import {View, Text, Button, Alert} from "react-native";
import {sair} from '../services/AuthService';
import { auth } from "../config/firebase";

export default function App({Navigation}){
    async function realizarLogout() {
        await sair()
        navigation.navigate('login')
    }

return(
    <View>
        <Text>Seja Bem Vindo</Text>
        <Text>Usuário: {auth.currentUser?.email}</Text>
        <Button
            title="Sair"
            onPress={realizarLogout}
        />
    </View>
)
}