import React from "react";
import { SafeAreaView, Text, Button } from "react-native";


export default function OrdenesScreen(props){
    
    const {navigation} = props;

    const exitButton = ()=>{
        
    }

    return(
        <SafeAreaView>
            <Text>1 Estamos en la pantalla de ORDENES</Text>
            <Button onPress={exitButton} title="EXIT"/>
        </SafeAreaView>
    )

}