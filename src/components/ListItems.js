import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { windowWidth } from "../utils/Dimensions";

function ListItem({ name, image }) {
  return (
    <View
      style={{
        marginBottom: 20,
        marginRight: 34,
      }}
    >
      <View>
        <Image
          source={image}
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
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ListItem;
