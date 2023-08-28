import React , {useState,useEffect} from "react";
import { View, Text, Image } from "react-native";
import * as userService from "../services/userService";

function ProfileScreen() {
  const [user, setUser] = useState("");

  useEffect(() => {
    userService
      .getUser({})
      .then((res) => setUser(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <Image
        source={require("../assets/images/Avatar.jpg")}
        style={{
          height: 200,
          width: 200,
          borderRadius: 100,
          marginBottom: 10,
        }}
      />
      <Text style={{ fontSize: 20 }}>Họ : {user.firstName}</Text>
      <Text style={{ fontSize: 20 }}>Tên : {user.lastName}</Text>
      <Text style={{ fontSize: 20 }}>Tài khoản : {user.username}</Text>
      <Text style={{ fontSize: 20 }}>Email : {user.email}</Text>
    </View>
  );
}

export default ProfileScreen;
