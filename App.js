import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import AuthStack from "./src/navigations/AuthStack";
import AppStack from "./src/navigations/AppStack";

const App = () => {
  const currentUser = false;
  return (
    <NavigationContainer>
      {currentUser ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default App;
