import React from "react";
import { SafeAreaView, 
  Text,
  Button,
  View,  
  TouchableOpacity, 
  StyleSheet, 
  Alert,
  ScrollView
 } from "react-native";




export default function CustomerScreen(props){
    
    const {navigation} = props;

    const goToMenuScreen = ()=>{
        navigation.navigate("Menu");
    }

    const goToOrdenarScreen = ()=>{
        navigation.navigate("Ordenar");
    }

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

        
return (
    <SafeAreaView style={styles.container}>
   
      <Text style={styles.titleCustomer}>CLIENTES</Text>

    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.menuButton} onPress={goToMenuScreen}>
        <Text style={styles.menuButtonText}>Menu</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuButton} onPress={goToOrdenarScreen}>
        <Text style={styles.menuButtonText}>Ordenar</Text>
      </TouchableOpacity>
    </View>

      <TouchableOpacity style={styles.exitButton} onPress={exitButton}>
        <Text style={styles.exitButtonText}>EXIT</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e9b4ff', 
    alignItems: 'center',
    paddingTop: 80, 
  },
  titleCustomer: {
    fontSize: 28,
    color: '#000',
    marginBottom: 160, 
    marginTop: 10,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 1, 
  },
  menuButton: {
    backgroundColor: '#A3B1FF', 
    width: '60%', 
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 100, 
  },
  menuButtonText: {
    color: '#000',
    fontSize: 16,
  },
  exitButton: {
    backgroundColor: '#ff0000ff', 
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 70,
  },
  exitButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  }
  
});