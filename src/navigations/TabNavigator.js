import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import CatDetailScreen from "~/Screens/CatScreen";
import DogDetailScreen from "~/Screens/DogScreen";
import InfoPetScreen from "~/Screens/InfoPetScreen";
import AddScreen from "~/Screens/AddScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DogScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dog" component={DogDetailScreen} />
      <Stack.Screen name="dogs" component={InfoPetScreen} />
    </Stack.Navigator>
  );
}

function CatScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Cat" component={CatDetailScreen} />
      <Stack.Screen name="cats" component={InfoPetScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#2e3192" },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tab.Screen
        name="DogTab"
        component={DogScreen}
        options={{
          title: "Chó cảnh",
          headerShown: false,
          headerTitle: "Chó Cảnh",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dog" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CatTab"
        component={CatScreen}
        options={{
          title: "Mèo cảnh",
          headerTitle: "Mèo Cảnh",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cat" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
