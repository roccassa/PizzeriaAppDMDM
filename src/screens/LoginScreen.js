import React from "react";
import { SafeAreaView, Text, Button } from "react-native";


export default function LoginScreen(props){
    
    const {navigation} = props;

    const goToHomeScreen = ()=>{
        navigation.navigate("Home");
    }

    return(
        <SafeAreaView>
            <Text>1 Estamos en la pantalla de Login</Text>
            <Button onPress={goToHomeScreen} title="Iniciar Sesion"/>
        </SafeAreaView>
    )

}