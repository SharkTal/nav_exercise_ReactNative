import React from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";

const History = ({ route, navigation }) => {
  const { results } = route.params;
  return (
    <View style={styles.container}>
      <Text>Your History</Text>
      <FlatList
        data={results}
        renderItem={({ item }) => <Text>{item.key} </Text>}
      />
    </View>
  );
};

export default History;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "silver",
  },
});
