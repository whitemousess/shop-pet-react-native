import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  RefreshControl,
} from "react-native";

import * as petService from "~/services/petService";
import ListItem from "~/components/ListItems";

function CatScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = () => {
    petService
    .getPet({page: 1 ,perPage: 5, type:"cats"})
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
