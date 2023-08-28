import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View, RefreshControl } from "react-native";

import * as shopService from "~/services/shopService";
import ItemShop from "~/components/ItemShop";

function CartScreen({}) {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const loadData = () => {
        shopService
      .getProduct()
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
            <ItemShop
              key={data._id}
              data={data}
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

export default CartScreen;
