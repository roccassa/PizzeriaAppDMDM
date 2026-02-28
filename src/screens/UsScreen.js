import React from "react";
import { SafeAreaView, Text, Button } from "react-native";


export default function UsScreen(props){
    
    const {navigation} = props;

    const goToHomeScreen = ()=>{
        navigation.navigate("Home");
    }

    const exitButton = ()=>{
        
    }
    return(
        <SafeAreaView>
            <Text>1 Estamos en la pantalla de US</Text>
            <Button onPress={exitButton} title="EXIT"/>
        </SafeAreaView>
    )

}