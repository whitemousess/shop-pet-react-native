import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

// icons
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import LoginLogo from "../assets/images/LogoApp.png";

import InputCustom from "../components/InputCustom";
import ButtonCustom from "../components/ButtonCustom";

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={LoginLogo} />
        </View>

        <View style={styles.contentLogin}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
              color: "#333",
              marginBottom: 30,
              textAlign: "center",
            }}
          >
            Đăng nhập
          </Text>

          <InputCustom
            label={"Email ID"}
            icon={
              <MaterialIcons
                name="person"
                size={28}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            keyboardType="email-address"
          />
          <InputCustom
            label={"Mật khẩu"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            inputType="password"
            fieldButtonLabel={"Forgot?"}
            fieldButtonFunction={() => {}}
          />

              <ButtonCustom label={"Đăng nhập"} onPress={() => {}} />
    
              <Text
                onPress={() => navigation.navigate("Register")}
              >
                Chưa có tài khoản!
              </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  contentLogin: {
    paddingRight: 20,
    paddingLeft: 20,
  },

  imageContainer: {
    display: "flex",
    alignItems: "center",
    width: 400,
    height: 200,
  },
  
});

export default LoginScreen;
