import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { windowWidth } from "../utils/Dimensions";

function ListItem({ name, image }) {
  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <View>
        <Image
          source={image}
          style={{ width: 120, height: 120, borderRadius: 10, marginRight: 8 }}
        />
        <View style={{ width: windowWidth - 220 }}>
          <Text
            style={{
              color: "#333",
              fontSize: 14,
            }}
          >
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ListItem;
