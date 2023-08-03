import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/Pages/HomeScreen';
import LoginScreen from './src/Pages/LoginScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Kiểm tra xem đã có token lưu trữ hay chưa khi khởi động ứng dụng
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {isLoggedIn ? (
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
        ) : (
          <Tab.Screen name="LoginScreen" component={LoginScreen} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
