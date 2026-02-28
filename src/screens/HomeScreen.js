import React from "react";
import { SafeAreaView, 
  Text, 
  View, 
  TouchableOpacity, 
  StyleSheet, 
  Alert,
  BackHandler,
  Platform } from "react-native";


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
      
   
      <Text style={styles.title}>MENU PRINCIPAL</Text>

      <View style={styles.buttonsContainer}>
        
        <TouchableOpacity style={styles.menuButton} onPress={goToOrdenesScreen}>
          <Text style={styles.menuButtonText}>Employed</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={goToCustomerScreen}>
          <Text style={styles.menuButtonText}>Customer</Text>
        </TouchableOpacity>

     
        <TouchableOpacity style={[styles.menuButton, styles.usButton]} onPress={goToUsScreen}>
          <Text style={styles.menuButtonText}>US</Text>
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
  title: {
    fontSize: 28,
    color: '#000',
    marginBottom: 60, 
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
    marginBottom: 150, 
  },
  usButton: {
    width: '35%', 
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
    marginBottom: 40,
  },
  exitButtonText: {
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold',
  }
});