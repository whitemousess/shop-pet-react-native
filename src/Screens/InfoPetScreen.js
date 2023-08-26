import { ScrollView,Text, View, Image, StyleSheet } from "react-native";

function InfoPetScreen({ route }) {
  const { data } = route.params;

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
      <View>
        <Image
          source={{ uri: data.image }}
          style={{ width: "100%", height: 300, borderRadius: 10 }}
        />
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.description}>Mô tả : {data.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    borderTopColor : "#ccc",
    borderTopWidth: 1,
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: "#333"
  }
})

export default InfoPetScreen;
