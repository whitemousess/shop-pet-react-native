import React, { useContext, useState } from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

// icons
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import LoginLogo from "~/assets/images/LogoApp.png";

import InputCustom from "~/components/InputCustom";
import ButtonCustom from "~/components/ButtonCustom";
import { AuthContext } from "../context/AuthContext";

function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
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
            label={"user ID"}
            icon={
              <MaterialIcons
                name="person"
                size={28}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            value={username}
            onChangeText={(text) => setUsername(text)}
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
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <ButtonCustom
            label={"Đăng nhập"}
            onPress={() => {
              login(username, password);
            }}
          />

          <Text onPress={() => navigation.navigate("Register")}>
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
