import React, { useEffect, useState } from "react";
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

function InfoPetScreen({ route }) {
  const { data } = route.params;
  const [shopData, setShopData] = useState({ id_user: "", shop_product: "" });
  const [animation] = useState(new Animated.Value(-100));

  useEffect(() => {
    userService
      .getUser()
      .then((item) =>
        setShopData({ id_user: item._id, shop_product: data._id })
      );
  }, []);

  const submitAddProduct = async () => {
    showNotification();
    const storedToken = await AsyncStorage.getItem("token");
    await axios
      .post(`${process.env.REACT_NATIVE_BASE_URL}shop/add-to-card`, shopData, {
        headers: {
          authorization: "Bearer " + storedToken,
        },
      })
      .catch((err) => console.error(err));
  };

  const showNotification = () => {
    Animated.spring(animation, {
      toValue: 0, // Giá trị cuối cùng, hiển thị thông báo
      useNativeDriver: false, // Sử dụng Native Driver
    }).start();

    setTimeout(() => {
      Animated.timing(animation, {
        toValue: -100, // Đẩy thông báo ra khỏi màn hình
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, 4000);
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
        <TouchableOpacity style={styles.btnAddCart} onPress={showNotification}>
          <Text>Mua Ngay</Text>
        </TouchableOpacity>
      </View>

      <Animated.View
        style={{
          position: "absolute",
          top: animation, // Áp dụng giá trị animation vào vị trí y
          left: 0,
          right: 0,
          height: 50,
          backgroundColor: "#A8DF8E",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Đã thêm vào giỏ hàng</Text>
      </Animated.View>
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
