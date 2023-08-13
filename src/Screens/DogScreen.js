import { ScrollView, SafeAreaView, View } from "react-native";
import ListItem from "../components/ListItems";

const Dog = [
  { id: 1, name: "Chó 1", image: require("../assets/images/1.jpg") },
  { id: 2, name: "Chó 2", image: require("../assets/images/2.jpg") },
  { id: 3, name: "Chó 3", image: require("../assets/images/3.jpg") },
  { id: 4, name: "Chó 4", image: require("../assets/images/4.jpg") },
  { id: 5, name: "Chó 5", image: require("../assets/images/5.jpg") },
  { id: 6, name: "Chó 6", image: require("../assets/images/6.jpg") },
  { id: 7, name: "Chó 7", image: require("../assets/images/7.png") },
  { id: 8, name: "Chó 8", image: require("../assets/images/8.jpg") },
  { id: 9, name: "Chó 9", image: require("../assets/images/9.jpg") },
  { id: 10, name: "Chó 10", image: require("../assets/images/10.jpg") },
];

function DogScreen() {
  return (
    <SafeAreaView style={{ flex: 1 , marginRight: 8, marginLeft: 18}}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {Dog.map((data) => (
            <ListItem key={data.id} image={data.image} name={data.name}  style={{ flex: 0.5 }} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DogScreen;
