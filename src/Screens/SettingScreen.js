import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function SettingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("UserSetting")}>
          <Text style={styles.textMenu}>Thông tin cá nhân</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.textMenu}>Xóa tài khoản</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    margin: 10,
  },

  menuItem: {
    height: 52,
    paddingLeft: 24,
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#2e3192",
  },

  textMenu: {
    color: "#fff",
    fontWeight: "700",
  },
});

export default SettingScreen;
