import React from "react";
import { SafeAreaView, Text, Button } from "react-native";


export default function HomeScreen(props){
    
    const {navigation} = props;

    const goToUsScreen = ()=>{
        navigation.navigate("Us");
    }
     const goToCustomerScreen = ()=>{
        navigation.navigate("Customer");
    }
     const goToOrdenesScreen = ()=>{
        navigation.navigate("Ordenes");
    }
    const exitButton = ()=>{
        
    }

    return(
        <SafeAreaView>
            <Text>1 Estamos en la pantalla de Home</Text>

            <Button onPress={goToCustomerScreen} title="CLIENTES"/>
            <Button onPress={goToOrdenesScreen} title="EMPLEADOS (ORDENES)"/>
            <Button onPress={goToUsScreen} title="US"/>
            <Button onPress={exitButton} title="exit"/>
        </SafeAreaView>
    )

}