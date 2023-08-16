import { View, Text, Button, Image } from "react-native";

function ProfileScreen({ navigation }) {
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
      <Text style={{ fontSize: 20 }}>Họ : Chuột</Text>
      <Text style={{ fontSize: 20 }}>Tên : Bạch</Text>
      <Text style={{ fontSize: 20 }}>Tài khoản : Chuot bach</Text>
      <Text style={{ fontSize: 20 }}>Email : thang@gmail.com</Text>
      <Button title="edit" onPress={() => navigation.navigate("EditUser")} />
    </View>
  );
}

export default ProfileScreen;
