import React, { createContext, useEffect, useState } from "react";
import { Animated, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [status, setStatus] = useState("");
  const [animation] = useState(new Animated.Value(-100));

  const login = (username, password) => {
    setIsLoading(true);

    axios
      .post(`${process.env.REACT_NATIVE_BASE_URL}account/login`, {
        username,
        password,
      })
      .then((res) => {
        const data = res.data;
        const Token = data.token;
        const Info = data.data;

        setUserToken(Token);
        setUserInfo(Info);

        AsyncStorage.setItem("token", Token);
        AsyncStorage.setItem("info", JSON.stringify(Info));
      }).catch((error) => {
        showNotifications(error.response.data.message);
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken("");
    setUserInfo("");
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("info");
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const editAuth = async (edit, image, navigation) => {
    if (edit.password === edit.rePass) {
      const formData = new FormData();
      formData.append("firstName", edit.firstName);
      formData.append("lastName", edit.lastName);
      formData.append("email", edit.email);
      if (edit.password) {
        formData.append("password", edit.password);
      }
      if (image) {
        formData.append("avatar", {
          uri: image,
          type: "image/jpeg",
          name: "image.jpg",
        });
      } else {
        formData.append("avatar", userInfo.avatar); // Use data.image if no new image is selected
      }

      await axios
        .put(
          `${process.env.REACT_NATIVE_BASE_URL}account/current/edit`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              authorization: "Bearer " + userToken,
            },
          }
        )
        .then((response) => {
          const Info = response.data.data;
          setUserInfo(Info);
          AsyncStorage.setItem("info", JSON.stringify(Info)); 
          navigation.navigate("Setting")
        })
        .catch((error) => {
          console.log(error);
        });
        showNotifications("Thay Đổi thông tin thành công");
    } else {
        showNotifications("Mật khẩu không khớp");
    }
  };

  const showNotifications = (label) => {
    setStatus(label);
    notification();
  };

  const notification = () => {
    Animated.spring(animation, {
      toValue: 20,
      useNativeDriver: false,
    }).start();

    setTimeout(() => { 
      Animated.timing(animation, {
        toValue: -100, // Đẩy thông báo ra khỏi màn hình
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, 4000);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const Info = await AsyncStorage.getItem("info");
      const Token = await AsyncStorage.getItem("token");

      if (Info) {
        setUserInfo(JSON.parse(Info));
        setUserToken(Token);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        editAuth,
        login,
        logout,
        showNotifications,
        isLoading,
        userToken,
        userInfo,
      }}
    >
      {children}

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
        <Text>{status}</Text>
      </Animated.View>
    </AuthContext.Provider>
  );
};
