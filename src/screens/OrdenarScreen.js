import React, { useState } from "react";
import { SafeAreaView, Text, ImageBackground,View,TouchableOpacity,Alert,TextInput,StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";


export default function OrdenarScreen(props){
    
    const {navigation} = props;

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

    const saveOrderButton = ()=>{
        
    }
    const [tipoPizza, setTipoPizza] = useState('');
    const [tamanoPizza, setTamanoPizza] = useState('');
    const [cantidad, setCantidad] = useState('');
    const tiposDePizza = ["Hawaiana", "Peperoni", "Margarita", "Mexicana", "Especial"];
    const tamanos = ["Chica", "Mediana", "Grande"];

return (
        <ImageBackground
            source={require("../../assets/fondo_pizza.jpg")} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <SafeAreaView style={styles.container}>
                    
                    <Text style={styles.title}>ORDER</Text>

                 
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={tipoPizza}
                            onValueChange={(itemValue) => setTipoPizza(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Cual te gusta mas ?" value="" color="#888" />
                            {tiposDePizza.map((tipo, index) => (
                                <Picker.Item key={index} label={tipo} value={tipo} />
                            ))}
                        </Picker>
                    </View>

                 
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={tamanoPizza}
                            onValueChange={(itemValue) => setTamanoPizza(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Que tamaño ?" value="" color="#888" />
                            {tamanos.map((tamano, index) => (
                                <Picker.Item key={index} label={tamano} value={tamano} />
                            ))}
                        </Picker>
                    </View>

                   
                    <TextInput
                        style={styles.input}
                        placeholder="cuantas pizzas quieres ?"
                        placeholderTextColor="#888"
                        keyboardType="numeric" 
                        value={cantidad}
                        onChangeText={setCantidad}
                        maxLength={2} 
                    />

                   
                    <TouchableOpacity style={styles.saveButton} onPress={saveOrderButton}>
                        <Text style={styles.saveButtonText}>SAVE</Text>
                    </TouchableOpacity>

                    
                    <View style={styles.exitContainer}>
                        <TouchableOpacity style={styles.exitButton} onPress={exitButton}>
                            <Text style={styles.exitButtonText}>EXIT</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.7)", 
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
    },
    title: {
        fontSize: 32,
        color: '#000',
        marginBottom: 50,
        marginTop: 40,
        fontWeight: 'bold',
    },
    pickerContainer: {
        width: '80%',
        backgroundColor: '#EFEFE6', 
        marginBottom: 30,
        justifyContent: 'center',
        height: 60, 
    },
    picker: {
        width: '100%',
        color: '#000',
    },
    input: {
        width: '80%',
        height: 60,
        backgroundColor: '#EFEFE6',
        marginBottom: 40,
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
    },
    saveButton: {
        backgroundColor: '#A3B1FF', 
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 15,
        marginTop: 20,
    },
    saveButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    exitContainer: {
        width: '100%',
        paddingRight: '10%',
        alignItems: 'flex-end',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 40,
    },
    exitButton: {
        backgroundColor: '#FFAA8F', 
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
    },
    exitButtonText: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
    }
});


