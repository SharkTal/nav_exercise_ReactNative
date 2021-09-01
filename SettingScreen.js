import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingScreen = ({ route, navigation }) => {
  const { user } = route.params;
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
      <Text>Welcome to settings {user}</Text>
    </View>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
