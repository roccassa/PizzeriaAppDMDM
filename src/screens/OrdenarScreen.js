import React, { useState } from "react";
import { SafeAreaView, Text, ImageBackground,View,TouchableOpacity,Alert,TextInput,StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from '@react-native-async-storage/async-storage';


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
    };

    const [tipoPizza, setTipoPizza] = useState('');
    const [tamanoPizza, setTamanoPizza] = useState('');
    const [cantidad, setCantidad] = useState('');
    const tiposDePizza = ["Hawaiana", "Peperoni", "Margarita", "Mexicana", "Especial"];
    const tamanos = ["Chica", "Mediana", "Grande"];
    const [listaOrdenes, setListaOrdenes] = useState([]);

    const guardado = async () => {
        if (!tipoPizza || !tamanoPizza || !cantidad) {
            Alert.alert("Error", "Por favor completa todos los campos del pedido.");
            return;
        }

        const datosOrden = {
            tipo: tipoPizza,
            tamano: tamanoPizza,
            cantidad: cantidad
        };

        try {
            const ordenesGuardadas = await AsyncStorage.getItem('carritoOrdenes');
          
            const listaActual = ordenesGuardadas ? JSON.parse(ordenesGuardadas) : [];

         
            listaActual.push(datosOrden);

           
            await AsyncStorage.setItem('carritoOrdenes', JSON.stringify(listaActual));

            
            Alert.alert("¡Guardado!", "La pizza se agregó a la orden. Puedes seguir pidiendo o regresar al menú.");
            setTipoPizza('');
            setTamanoPizza('');
            setCantidad('');
              
        } catch (error) {
            Alert.alert("Error", "No se pudo guardar la orden.");
            console.log(error);
        }
    };

return (
        <ImageBackground
            source={require("../../assets/fondo_pizza.jpg")} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <SafeAreaView style={styles.container}>
                    
                    <Text style={styles.title}>ORDENAR</Text>

                 
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={tipoPizza}
                            onValueChange={(itemValue) => setTipoPizza(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="¿Cuál te gusta mas?" value="" color="#888" />
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
                            <Picker.Item label="¿Qué tamaño?" value="" color="#4e4e4e" />
                            {tamanos.map((tamano, index) => (
                                <Picker.Item key={index} label={tamano} value={tamano} />
                            ))}
                        </Picker>
                    </View>

                   
                    <TextInput
                        style={styles.input}
                        placeholder="¿Cuántas pizzas quieres?"
                        placeholderTextColor="#888"
                        keyboardType="numeric" 
                        value={cantidad}
                        onChangeText={setCantidad}
                        maxLength={2} 
                    />

                   <View style={StyleSheet.buttonsContainer}>

                    <TouchableOpacity style={styles.saveButton} onPress={guardado}>
                        <Text style={styles.saveButtonText}>Guardar</Text>
                    </TouchableOpacity>

                   </View>
                    
                    <TouchableOpacity style={styles.exitButton} onPress={exitButton}>
                      <Text style={styles.exitButtonText}>Cerrar sesión</Text>
                    </TouchableOpacity>

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
        fontSize: 28,
        color: '#000',
        marginBottom: 50,
        marginTop: 50,
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
        backgroundColor: 'rgb(184, 22, 22)', 
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginTop: 180,
    },
    exitButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
  },
    buttonsContainer: {
      width: '100%',
      alignItems: 'center',
      flex: 1, 
    },
});


