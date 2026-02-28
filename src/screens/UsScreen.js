import React from "react";
import { SafeAreaView, 
  Text,
  View,  
  TouchableOpacity, 
  StyleSheet, 
  Alert,
  ScrollView
 } from "react-native";


export default function UsScreen(props){
    
    const {navigation} = props;

    const goToHomeScreen = ()=>{
        navigation.navigate("Home");
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


    return(
    <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.titleUS}>Sobre Nosotros</Text>

            <Text style={styles.description}>
                Somos una pizzería comprometida con brindar un servicio de calidad,
                ofreciendo productos frescos y una experiencia única.
            </Text>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Misión</Text>
                <Text style={styles.text}>
                    Ofrecer pizzas artesanales elaboradas con ingredientes frescos y locales,
                    brindando a nuestros clientes una experiencia gastronómica cálida y auténtica
                    que combine tradición italiana con el sabor único de nuestra comunidad.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Visión</Text>
                <Text style={styles.text}>
                    Convertirnos en la pizzería favorita de la ciudad, reconocida por la
                    calidad de nuestras recetas, la innovación en sabores y el ambiente
                    acogedor que invita a compartir momentos inolvidables.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Valores</Text>
                <View>
                    <Text style={styles.listItem}>• Calidad</Text>
                    <Text style={styles.listItem}>• Pasión</Text>
                    <Text style={styles.listItem}>• Hospitalidad</Text>
                    <Text style={styles.listItem}>• Sostenibilidad</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.exitButton} onPress={exitButton}>
            <Text style={styles.exitButtonText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  
container: {
    backgroundColor: '#f3e9b4ff', 
    alignItems: 'center',
    paddingTop: 20, 
  },
safeArea: {
    flex: 1,
    backgroundColor: "#f3e9b4",
  },
  titleUS: {
    fontSize: 28,
    color: '#000',
    marginBottom: 10, 
    marginTop: 60,
    fontWeight: 'bold'
  },
 description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
    color: "#444",
  },
  section: {
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  subtitle: {
    paddingLeft: 20,
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: "#555",
  },
    listItem: {
    fontSize: 16,
    marginBottom: 4,
  },
  buttonsContainer: {
  width: '100%',
    alignItems: 'center',
    flex: 1, 
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