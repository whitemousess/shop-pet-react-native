import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View, RefreshControl } from "react-native";

import * as petService from "~/services/petService";
import ListItemManager from "~/components/ListItemManager";

function ManagerScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const loadData = () => {
    petService
    .getPet({})
    .then((response) => setData(response))
    .catch((error) => console.log(error)) 
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
