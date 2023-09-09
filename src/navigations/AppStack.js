import React, { useState, useEffect, useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

import * as shopService from "../services/shopService";

import TabNavigator from "./TabNavigator";
import ProfileScreen from "~/Screens/ProfileScreen";
import EditProfileScreen from "~/Screens/EditProfileScreen";
import ManagerScreen from "~/Screens/ManagerScreen";
import EditPetScreen from "~/Screens/EditPetScreen";
import SettingScreen from "~/Screens/SettingScreen";

import DrawerCustom from "~/components/DrawerCustom";
import CartScreen from "~/Screens/CartScreen";
import { AuthContext } from "../context/AuthContext";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const ManagerStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Manager" component={ManagerScreen} />
      <Stack.Screen name="Edit" component={EditPetScreen} />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="UserSetting" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

function AppStack() {
  const [cartCount, setCartCount] = useState(0);
  const { userInfo } = useContext(AuthContext);

  const loadData = () => {
    shopService.getProduct().then((product) => setCartCount(product.length));
  };

  {
    userInfo &&
      useEffect(() => {
        loadData();
      }, []);
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerCustom {...props} />}
      screenOptions={{
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
          title: "",
          drawerLabel: "Trang chủ",
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="User"
        component={ProfileScreen}
        options={{
          title: "",
          drawerLabel: "Trang cá nhân",
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "",
          drawerLabel: "Giỏ hàng",
          tabBarBadge: 3, // Số lượng hiển thị trên badge
          tabBarBadgeStyle: { backgroundColor: "red", color: "white" }, // Style của badge
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" color={color} size={size}>
              {cartCount ? <FontAwesome name="circle" color={"red"} /> : null}
            </MaterialIcons>
          ),
        }}
      />

      {userInfo.role === 0 ? (
        <Drawer.Screen
          name="ManagerStack"
          component={ManagerStack}
          options={{
            title: "",
            drawerLabel: "Quản lý",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="database-settings"
                size={size}
                color={color}
              />
            ),
          }}
        />
      ) : null}

      <Drawer.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          title: "",
          drawerLabel: "Cài đặt",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppStack;
