import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomerScreen from "../screens/CustomerScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MenuScreen from "../screens/MenuScreen";
import OrdenesScreen from "../screens/OrdenesScreen";
import OrdenarScreen from "../screens/OrdenarScreen";
import UsScreen from "../screens/UsScreen";

const Stack = createNativeStackNavigator();

export default function NavigationStackPizzeria(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true}} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true}} />
            <Stack.Screen name="Customer" component={CustomerScreen} options={{ headerShown: true}} />
            <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: true}} />
            <Stack.Screen name="Ordenes" component={OrdenesScreen} options={{ headerShown: true}} />
            <Stack.Screen name="Ordenar" component={OrdenarScreen} options={{ headerShown: true}} />
            <Stack.Screen name="Us" component={UsScreen} options={{ headerShown: true}} />
        </Stack.Navigator>
    );
}


