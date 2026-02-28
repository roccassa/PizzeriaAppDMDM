import React from "react";
import { SafeAreaView, Text, Button } from "react-native";


export default function CustomerScreen(props){
    
    const {navigation} = props;

    const goToMenuScreen = ()=>{
        navigation.navigate("Menu");
    }

    const goToOrdenarScreen = ()=>{
        navigation.navigate("Ordenar");
    }
    
    const exitButton = ()=>{
        
    }

    return(
        <SafeAreaView>
            <Text>1 Estamos en la pantalla de CUSTOMER</Text>
            <Button onPress={goToMenuScreen} title="Menu"/>
            <Button onPress={goToOrdenarScreen} title="Ordenar"/>
            <Button onPress={exitButton} title="EXIT"/>
        </SafeAreaView>
    )

}