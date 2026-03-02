import React, { useState, useEffect } from 'react';
import { SafeAreaView, ImageBackground, Text, View, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OrdenesScreen(props) {
  const { navigation } = props;
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    const cargarOrdenes = async () => {
      try {
        const ordenesGuardadas = await AsyncStorage.getItem('carritoOrdenes');
        if (ordenesGuardadas) {
          setOrdenes(JSON.parse(ordenesGuardadas)); 
        }
      } catch (error) {
        console.log("Error al leer la memoria", error);
      }
    };

    cargarOrdenes();
  }, []);

  const exitButton = () => {
    Alert.alert(
      "Salir",
      "¿Deseas regresar al menú principal?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Sí", 
          onPress: async () => {
            try {
             await AsyncStorage.removeItem('carritoOrdenes');
             setOrdenes([]);
             navigation.navigate('Login'); 
            } catch (error) {
              console.log("Error al limpiar la memoria", error);
            }
          }
        }
      ]
    );
  };

  const renderizarOrden = ({ item, index }) => (
    <View style={styles.orderCard}>
      <Text style={styles.orderTitle}>Orden #{index + 1}</Text>
      <Text style={styles.orderText}>Pizza: {item.tipo}</Text>
      <Text style={styles.orderText}>Tamaño: {item.tamano}</Text>
      <Text style={styles.orderText}>Cantidad: {item.cantidad}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require("../../assets/fondo_pizza.jpg")} 
      style={styles.backgroundImage}
      resizeMode="cover">
        <View style={styles.overlay}>
            <SafeAreaView style={styles.container}>
              <Text style={styles.title}>ORDENES</Text>

              {ordenes.length === 0 ? (
                <Text style={styles.emptyText}>Aún no hay órdenes guardadas.</Text>
              ) : (
                <FlatList
                  data={ordenes}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderizarOrden}
                  style={styles.list}
                  showsVerticalScrollIndicator={false}
                />
              )}

              <TouchableOpacity style={styles.exitButton} onPress={exitButton}>
                  <Text style={styles.exitButtonText}>Cerrar sesión</Text>
              </TouchableOpacity>
            </SafeAreaView>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    color: '#000',
    marginBottom: 30,
    fontWeight: 'bold',
    marginTop: 60,
  },
  list: {
    width: '100%',
    paddingHorizontal: '10%',
  },
  orderCard: {
    backgroundColor: '#EAEAEA',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    width: '100%',
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  orderText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  emptyText: {
    fontSize: 16,
    color: '#555',
    marginTop: 50,
    fontStyle: 'italic',
  },
  exitContainer: {
    width: '100%',
    paddingRight: '10%',
    alignItems: 'flex-end',
    marginTop: 20,
    marginBottom: 40,
  },
  exitButton: {
    backgroundColor: 'rgb(184, 22, 22)', 
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 70,
    },
  exitButtonText: {
      color: '#ffffff',
      fontSize: 14,
      fontWeight: 'bold',
    },
     overlay: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.7)", 
    },
     backgroundImage: {
        flex: 1,
    },
});