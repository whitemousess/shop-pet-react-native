import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [userInfo, setUserInfo] = useState("");

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
      });

    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken("");
    setUserInfo("");
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("info");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      const Info = await AsyncStorage.getItem("info")

      if(Info){
        setUserInfo(JSON.parse(Info));
      }
      
    } catch (error) {}
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoading, userToken, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
