import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CatScreen from "../Screens/CatScreen";
import DogScreen from "../Screens/DogScreen";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#2e3192" },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tab.Screen
        name="Dog"
        component={DogScreen}
        options={{
          title: "Chó cảnh",
          headerTitle: "Chó Cảnh",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dog" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cat"
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
