import React, { Component } from "react";
import { View, StyleSheet, Image, AsyncStorage } from "react-native";
import { Actions } from "react-native-router-flux";

export default class SplashScreen extends Component {
  componentDidMount = async () => {
    const isLoggedIn = JSON.parse(await AsyncStorage.getItem("user"));
    if (isLoggedIn) {
      Actions.home();
    } else {
      Actions.login();
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../Images/logo.png")}
        ></Image>
        <Image
          style={styles.loading}
          source={require("../Images/food.gif")}
        ></Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    width: "80%",
    height: 150,
    alignItems: "center",
    resizeMode: "contain",
  },
  loading: {
    width: "30%",
    resizeMode: "contain",
    height: 80,
  },
});
