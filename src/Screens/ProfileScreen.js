import React , { useContext} from "react";
import { View, Text, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";

function ProfileScreen() {
  const {userInfo} = useContext(AuthContext)

  return (
    <View>
      <Image
        source={{uri: userInfo.avatar}}
        style={{
          height: 200,
          width: 200,
          borderRadius: 100,
          marginBottom: 10,
        }}
      />
      <Text style={{ fontSize: 20 }}>Họ : {userInfo.firstName}</Text>
      <Text style={{ fontSize: 20 }}>Tên : {userInfo.lastName}</Text>
      <Text style={{ fontSize: 20 }}>Tài khoản : {userInfo.username}</Text>
      <Text style={{ fontSize: 20 }}>Email : {userInfo.email}</Text>
    </View>
  );
}

export default ProfileScreen;
