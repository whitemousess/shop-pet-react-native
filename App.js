import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import AuthStack from './src/navigations/AuthStack';
import AppStack from './src/navigations/AppStack';
import { View, StatusBar, Platform } from 'react-native';

const App = () => {
  const currentUser = false;

  // Đảm bảo rằng bạn có thông tin về kích thước thanh trạng thái

  return (
    <NavigationContainer>
        <View style={{ flex: 0, backgroundColor: 'white'}}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
        </View>
      {currentUser ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default App;
