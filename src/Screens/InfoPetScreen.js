import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as userService from "../services/userService";
import { AuthContext } from "~/context/AuthContext";

function InfoPetScreen({ route }) {
  const { data } = route.params;
  const {showNotifications} = useContext(AuthContext) 
  const [shopData, setShopData] = useState({ id_user: "", shop_product: "" });

  useEffect(() => {
    userService
      .getUser()
      .then((item) =>
        setShopData({ id_user: item._id, shop_product: data._id })
      );
  }, []);

  const submitAddProduct = async () => {
    showNotifications("Đã thêm vào giỏ hàng");
    const storedToken = await AsyncStorage.getItem("token");
    await axios
      .post(`${process.env.REACT_NATIVE_BASE_URL}shop/add-to-card`, shopData, {
        headers: {
          authorization: "Bearer " + storedToken,
        },
      })
      .catch((err) => console.error(err));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Image
          source={{ uri: data.image }}
          style={{ width: "100%", height: 300, borderRadius: 10 }}
        />
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.description}>Mô tả : {data.description}</Text>
      </ScrollView>
      <View style={styles.btnBuy}>
        <TouchableOpacity style={styles.btnAddCart} onPress={submitAddProduct}>
          <Text>Thêm giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAddCart} onPress={() => {showNotifications("Đã thêm vào giỏ hàng")}}>
          <Text>Mua Ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: {
    marginTop: 10,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    fontSize: 24,
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    color: "#333",
  },

  btnBuy: {
    flexDirection: "row",
  },

  btnAddCart: {
    width: "50%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 0.3,
    position: "relative",
    right: 0,
    bottom: 0,
    backgroundColor: "#ADC4CE",
  },
});

export default InfoPetScreen;
