import axios from "axios";
import React , {useEffect,useState} from "react";
import { ScrollView, SafeAreaView, View } from "react-native";

import ListItem from "../components/ListItems";

function DogScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Thực hiện yêu cầu GET khi component được mount
    axios.get('http://192.168.1.5:1407/api/pet/show?page=1&per_page=2&type=dogs')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {data.map((data) => (
            <ListItem key={data._id} image={data.image} name={data.name} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DogScreen;
