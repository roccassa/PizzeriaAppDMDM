import React from "react";
import { SafeAreaView, 
  Text, 
  View, 
  TouchableOpacity, 
  StyleSheet, 
  Alert
   } from "react-native";



export default function MenuScreen(props){
    
    const {navigation} = props;

    const menu = [
        { tipo: "Hawaiana", chica: 80, mediana: 120, grande: 160 },
        { tipo: "Peperoni", chica: 75, mediana: 115, grande: 150 },
        { tipo: "Margarita", chica: 85, mediana: 125, grande: 170 },
        { tipo: "Mexicana", chica: 90, mediana: 130, grande: 175 },
        { tipo: "Especial", chica: 95, mediana: 140, grande: 190 },
    ];

    const exitButton = ()=>{
        Alert.alert(
            "Cerrar sesión",
            "¿Estás seguro de que quieres salir?",
            [
                { text: "Cancelar", style: "cancel" },
                    { 
                    text: "Sí, salir", 
                    onPress: () => {
                    navigation.navigate('Login');
                    }
                }
            ]
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleMenu}>MENU</Text>

            <View style={styles.table}>

                <View style={styles.row}>
                    <Text style={[styles.itemTable, styles.headerText]}>Tipo</Text>
                    <Text style={[styles.itemTable, styles.headerText]}>Chica</Text>
                    <Text style={[styles.itemTable, styles.headerText]}>Mediana</Text>
                    <Text style={[styles.itemTable, styles.headerText]}>Grande</Text>
                </View>

                {menu.map((item, index) => (
                    <View key={index} style={styles.row}>
                    <Text style={styles.itemTable}>{item.tipo}</Text>
                    <Text style={styles.itemTable}>${item.chica}</Text>
                    <Text style={styles.itemTable}>${item.mediana}</Text>
                    <Text style={styles.itemTable}>${item.grande}</Text>
                </View>
                ))}

            </View>

            <TouchableOpacity style={styles.exitButtonMenu} onPress={exitButton}>
            <Text style={styles.exitButtonText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: '#f3e9b4ff', 
        alignItems: 'center',
        paddingTop: 20, 
    },
    table: {
        margin: 20,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    titleMenu: {
        fontSize: 28,
        color: '#000',
        marginBottom: 10, 
        marginTop: 60,
        fontWeight: 'bold'
    },
    itemTable: {
        width: 90,
        padding: 9,
        textAlign: "center",
        borderWidth: 0.5,
        borderColor: "#ccc",
    },
    row: {
        flexDirection: "row",
    },
    exitButtonMenu: {
        backgroundColor: '#ff0000ff', 
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginTop: 310,
    },
    exitButtonText: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    }
});