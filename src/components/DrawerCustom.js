import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { AuthContext } from "../context/AuthContext";

function DrawerCustom(props) {
  const { logout, userInfo } = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#fcb000" }}
      >
        <ImageBackground
          source={require("../assets/images/BGPet.jpg")}
          style={{ padding: 20, flexDirection: "row" }}
        >
          <Image
            source={{ uri: userInfo.avatar }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
              marginRight: 24,
            }}
          />
          <View>
            <Text style={{ color: "#000", fontSize: 18, marginBottom: 5 }}>
              {userInfo.firstName && userInfo.lastName
                ? userInfo.firstName + " " + userInfo.lastName
                : userInfo.username}
            </Text>
            {userInfo.role === 0 ? (
              <Text style={{ color: "#000", fontSize: 18, marginBottom: 5 }}>
                Quản lý
              </Text>
            ) : null} 
          </View>
        </ImageBackground>

        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          padding: 10,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Đăng xuất
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DrawerCustom;
