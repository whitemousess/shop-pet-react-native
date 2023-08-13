import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";

const Stack = createNativeStackNavigator()

function AuthStack() {
    return ( 
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
     );
}

export default AuthStack;