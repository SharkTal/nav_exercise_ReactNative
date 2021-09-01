import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { useState } from "react";

const HomeScreen = ({ navigation }) => {
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const [results, setResults] = useState([]);

  const handleAdd = () => {
    setResults([
      ...results,
      { key: numberOne + " + " + numberTwo + " = " + (numberOne + numberTwo) },
    ]);
    setNumberOne("");
    setNumberTwo("");
  };

  const handleDeduct = () => {
    setResults([
      ...results,
      { key: numberOne + " - " + numberTwo + " = " + (numberOne - numberTwo) },
    ]);
    setNumberOne("");
    setNumberTwo("");
  };
  return (
    <View style={styles.container}>
      <Text>Enter your numbers</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter your number"
          value={numberOne}
          onChangeText={(input) => setNumberOne(parseInt(input))}
          keyboardType="numeric"
          keyboardAppearance="dark"
          onSubmitEditing={() => Keyboard.dismiss()}
          returnKeyType="done"
          multiline={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your number"
          value={numberTwo}
          onChangeText={(input) => setNumberTwo(parseInt(input))}
          keyboardType="numeric"
          keyboardAppearance="dark"
          onSubmitEditing={() => Keyboard.dismiss()}
          returnKeyType="done"
          multiline={true}
        />
      </View>

      <View style={styles.button_section}>
        <Button onPress={handleAdd} title="+" />
        <Button onPress={handleDeduct} title="-" />
      </View>

      <Button
        onPress={() => navigation.navigate("History", { results: results })}
        title="History"
      />

      <Button
        onPress={() => navigation.navigate("Settings", { user: 'Mike' })}
        title="ScreenSetting"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 50,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  button_section: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
  },
});
