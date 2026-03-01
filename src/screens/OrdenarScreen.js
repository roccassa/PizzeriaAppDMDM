import React from "react";
import { SafeAreaView, Text, Button, ImageBackground } from "react-native";


export default function OrdenarScreen(props){
    
    const {navigation} = props;

    const exitButton = ()=>{
        
    }

    const saveOrderButton = ()=>{
        
    }

    return(
        <SafeAreaView>
            <Text>1 Estamos en la pantalla de ORDENAR</Text>
            <Button onPress={saveOrderButton} title="Save Order"/>
            <Button onPress={exitButton} title="EXIT"/>
        </SafeAreaView>
    )

}



