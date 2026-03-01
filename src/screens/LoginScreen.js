import React, { useState } from "react"
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, StyleSheet, Alert,BackHandler,Image, ImageBackground } from "react-native";


export default function LoginScreen(props){
    
    const {navigation} = props;

    const goToHomeScreen = ()=>{
        navigation.navigate("Home");
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const validacionUsuario = ()=>{
        const usuario1 = "1";
        const usuario2 = "alex";
        const usuario3 = "chava";

        const password1 = "1";
        const password2 = "alex123";
        const password3 = "siuuu777";
        
        const validado = (username === usuario1 && password === password1);
        const validado2 = (username === usuario2 && password === password2);
        const validado3 = (username === usuario3 && password === password3);

        if(validado || validado2 || validado3){
            setUsername('');
            setPassword('');
            goToHomeScreen();
        }else{
            Alert.alert("Error,usuario o contraseña invalida")
        }

    }
    const adios= ()=>{
        
        BackHandler.exitApp();

    }
    
    return (
      <ImageBackground
        source={require("../../assets/fondo_login.jpg")} 
        style={styles.backgroundImage}
        resizeMode="cover">
        
        <View style={styles.overlay}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
              BIENVENIDO A{'\n'}PIZZERIA TECNM
            </Text>
            <Image 
          source={require('../../assets/istockphoto-1366259730-612x612.jpg')} style={styles.logo}resizeMode="contain" 
          />
            <Text style={styles.subtitle}>Inicia sesión</Text>
            <TextInput
              style={styles.input}
              placeholder="USUARIO"
              placeholderTextColor="#000"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="CONTRASEÑA"
              placeholderTextColor="#000"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={false} 
            />
              <View style={styles.loginContainer}>
              <TouchableOpacity style={styles.loginButton} onPress={validacionUsuario}>
                <Text style={styles.loginButtonText}>ENTRAR</Text>
              </TouchableOpacity>
              </View>
            <View style={styles.exitContainer}>
              <TouchableOpacity style={styles.exitButton} onPress={adios}>
                <Text style={styles.exitButtonText}>Cerrar sesión</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
    </ImageBackground>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold', 
    textAlign: 'center',
    color: '#000',
    marginBottom: 40,
    letterSpacing: 1,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    marginBottom: 30,
    fontWeight:'bold',
  },
  input: {
    width: '80%',
    height: 60,
    backgroundColor: '#EFEFE6', 
    marginBottom: 30,
    textAlign: 'center', 
    fontSize: 14,
    color: '#000',
  },
  loginContainer: {
    width: '100%',
    alignItems: 'stretch',
     width: '50%',
    paddingRight: '20%',
    marginTop: 10,
    marginLeft:85
    
  },
  loginButton: {
    backgroundColor: '#efa6a6ff', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  loginButtonText: {
    color: '#000000ff',
    fontSize: 12,
    fontWeight:'bold',
  },
  exitContainer: {
    width: '100%',
    paddingRight: '10%', 
    alignItems: 'flex-end',
    marginTop: 125,
  },
  exitButton: {
    backgroundColor: '#ff0000ff', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20, 
    marginBottom: 115
  },
  exitButtonText: {
      color: '#000',
      fontSize: 14,
      fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.7)", 
  }
})