import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, FontAwesome5 } from "react-native-vector-icons";

import TabNavigator from "./TabNavigator";
import ProfileScreen from "../Screens/ProfileScreen";
import SettingScreen from "../Screens/SettingScreen";

import DrawerCustom from "../components/DrawerCustom";

const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerCustom {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#2e3192",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          title: "Trang chủ",
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cat"
        component={ProfileScreen}
        options={{
          title: "Trang cá nhân",
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Dog"
        component={SettingScreen}
        options={{
          title: "Cài đặt",
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppStack;
