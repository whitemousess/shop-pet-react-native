import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

function ListItem({ data, navigation }) {
  const handleDataOnPress = () => {
    navigation.navigate(data.type, { data: data });
  };

  return (
    <TouchableOpacity onPress={handleDataOnPress}>
      <View
        style={{
          marginBottom: 20,
          margin: 20,
        }}
      >
        <Image
          source={{ uri: data.image }}
          style={{ width: 160, height: 160, borderRadius: 10 }}
        />
        <View>
          <Text
            style={{
              color: "#333",
              fontSize: 14,
              textAlign: "center",
            }}
          >
            {data.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ListItem;
