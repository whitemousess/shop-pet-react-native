import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";

function AppNav() {
  const { userToken, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNav;
