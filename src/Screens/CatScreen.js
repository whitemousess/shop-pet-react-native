import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, View ,Text } from "react-native";
import ListItem from "../components/ListItems";

function CatScreen() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Thực hiện yêu cầu GET khi component được mount
    axios
      .get("http://192.168.1.5:1407/api/pet/show?page=1&per_page=2&type=cats")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
      {data.length > 0 ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {data.map((data) => (
            <ListItem key={data._id} data={data} />
          ))}
        </View>) : (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>Chưa có thông tin</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default CatScreen;
