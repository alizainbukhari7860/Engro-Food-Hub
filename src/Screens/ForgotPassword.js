import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { Item, Input, Button } from "native-base";

export default class Login extends Component {
  render() {
    return (
      <ImageBackground
        style={{
          flex: 1,
          width: "100%",
        }}
        source={require("../Images/background.jpg")}
      >
        <KeyboardAvoidingView behavior="position" style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../Images/lock.png")}
          ></Image>
          <Text style={styles.heading}>Recover Password</Text>

          <Text style={styles.text}>
            Ohh! Seems like you forgot your password. Enter your registered
            email address to receive password!
          </Text>
          <Item style={styles.email}>
            <Input
              style={{ color: "#fff" }}
              placeholderTextColor={"rgba(255,255,255,0.5)"}
              placeholder="example@abc.com"
            />
            <Icon
              style={{ fontSize: 20, color: "#fff" }}
              active
              name="envelope"
            />
          </Item>

          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Recover Password",
                "The password has been sent to your registered email address."
              );
            }}
          >
            <Button rounded style={styles.button}>
              <Text style={{ color: "#fff" }}>Send</Text>
            </Button>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 40,
    fontSize: 14,
    paddingHorizontal: 25,
  },
  button: {
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
    backgroundColor: "rgba(0, 204, 102,0.9)",
  },
  heading: {
    fontSize: 35,
    marginTop: 20,
    fontFamily: "titleFont",
    alignSelf: "center",
    paddingHorizontal: 10,
    color: "rgba(0, 204, 102,0.9)",
  },
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  logo: {
    width: 100,
    alignSelf: "center",
    height: 170,
    resizeMode: "contain",
    marginTop: 30,
    opacity: 0.5,
  },
  email: {
    paddingVertical: 10,
    alignSelf: "center",
    width: "70%",
    height: 50,
    paddingLeft: 10,
    marginTop: 80,
  },
});
