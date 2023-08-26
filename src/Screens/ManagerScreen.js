import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View, RefreshControl } from "react-native";
import ListItemManager from "../components/ListItemManager";

function ManagerScreen({ route, navigation }) {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const loadData = () => {
    axios
      .get("http://192.168.1.5:1407/api/pet/show?page=1&per_page=5")
      .then((response) => setData(response.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    loadData();
    setRefreshing(false);
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {data.length > 0 ? (
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          {data.map((data) => (
            <ListItemManager
              key={data._id}
              data={data}
              navigation={navigation}
              onLoadData={loadData}
            />
          ))}
        </View>
      ) : (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text>Chưa có thông tin !</Text>
        </View>
      )}
    </ScrollView>
  );
}

export default ManagerScreen;
