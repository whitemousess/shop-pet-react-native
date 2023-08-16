import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

// icons
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import LoginLogo from "../assets/images/LogoApp.png";

import InputCustom from "../components/InputCustom";
import ButtonCustom from "../components/ButtonCustom";

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
              Đăng ký
            </Text>
  
            <InputCustom
              label={"Tài khoản"}
              icon={
                <MaterialIcons
                  name="person"
                  size={28}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
            />
  
            <InputCustom
              label={"Email"}
              icon={
                <MaterialIcons
                  name="alternate-email"
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
  
            <ButtonCustom label={"Đăng ký"} onPress={() => {}} />
  
            <Text onPress={() => navigation.navigate("Login")}>
              Đã có tài khoản!
            </Text>
          </View>
        </View>
      </ScrollView>
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

export default RegisterScreen;
