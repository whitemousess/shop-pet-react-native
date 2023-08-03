// HomeScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          quam eu elit venenatis tincidunt non vel libero. Nulla facilisi.
          Vivamus varius justo ac libero lacinia, ac convallis erat bibendum.
          Proin nec metus id dui hendrerit tincidunt. Fusce efficitur, ante at
          tincidunt elementum, risus nisi pharetra velit, ac sollicitudin neque
          dui at turpis. Etiam egestas, neque et viverra suscipit, ligula turpis
          convallis ex, et faucibus odio elit nec elit. Ut quis ex nisl. Vivamus
          vitae mi vitae libero tincidunt varius. Sed auctor iaculis mauris vel
          bibendum. Duis sit amet accumsan dui. Sed tincidunt arcu ac justo
          cursus facilisis. Aliquam facilisis sapien nec nisi vestibulum, ac
          viverra nisl elementum. Aenean congue lectus a tincidunt venenatis.
          Duis tristique ligula nec orci imperdiet, sed lacinia lorem rhoncus.
          Donec a semper tortor, in faucibus risus.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
  },
});

export default HomeScreen;
