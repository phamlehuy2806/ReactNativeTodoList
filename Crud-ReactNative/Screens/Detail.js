import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
import { firebase } from "../config";
import { updateTodo } from "../redux/actions/todoActions";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

const Detail = ({ route }) => {
  const [todo, setTodo] = useState({});
  const [textHeading, onChangeHeadingText] = useState(route.params.item.name);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //   const updateTodo = () => {
  //     const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  //     if (textHeading && textHeading.length > 0) {
  //       props.updateTodo(timestamp, textHeading);
  //     }
  //   };

  React.useEffect(() => {
    if (route.params.item) {
      setTodo(route.params.item);
    }
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textfield}
        onChangeText={onChangeHeadingText}
        value={textHeading}
        placeholder="Update Todo"
      />
      <Pressable
        style={styles.buttonUpdate}
        onPress={() => {
          dispatch(updateTodo(todo.id, { heading: textHeading }));
          setTimeout(() => {
            navigation.goBack();
          }, 500);
        }}
      >
        <Text>UPDATE USER</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginLeft: 15,
    marginRight: 15,
  },
  textfield: {
    marginBottom: 10,
    padding: 10,
    fontSize: 15,
    color: "#000000",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  buttonUpdate: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: "#0de065",
  },
});

export default Detail;
