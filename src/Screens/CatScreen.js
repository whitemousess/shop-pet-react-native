import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  RefreshControl,
} from "react-native";
import ListItem from "../components/ListItems";

function CatScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = () => {
    // Thực hiện yêu cầu GET khi component được mount
    axios
      .get("http://192.168.1.5:1407/api/pet/show?page=1&per_page=2&type=cats")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    loadData();
    setRefreshing(false);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SafeAreaView>
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
              <ListItem key={data._id} data={data} navigation={navigation} />
            ))}
          </View>
        ) : (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>Chưa có thông tin</Text>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}

export default CatScreen;
