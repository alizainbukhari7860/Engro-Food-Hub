import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
  KeyboardAvoidingView,
  AsyncStorage,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { Item, Input, Button } from "native-base";
import { Actions } from "react-native-router-flux";
import { api } from "../APIs/api";

export default class Login extends Component {
  state = {
    pnum: "",
    password: "",
  };
  login = async () => {
    const response = await api.get(
      "/html/APIs/login.php?pnum=" +
        this.state.pnum +
        "&password=" +
        this.state.password
    );
    if (response.data?.ID) {
      await AsyncStorage.setItem("user", JSON.stringify(response.data));
      Actions.internal();
    } else {
      Alert.alert("Invalid Credentials!");
    }
  };
  render() {
    return (
      <ImageBackground
        style={{
          flex: 1,
          width: "100%",
        }}
        source={require("../Images/background.jpg")}
      >
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../Images/logoo.png")}
          ></Image>
          <Text style={styles.heading}>ENGRO Food Hub</Text>

          <Item style={styles.pnoInput}>
            <Input
              onChangeText={(text) => {
                this.setState({
                  pnum: text,
                });
              }}
              style={{ color: "#fff" }}
              placeholderTextColor={"rgba(255,255,255,0.5)"}
              placeholder="Personal Number"
              keyboardType="number-pad"
            />
            <Icon style={{ fontSize: 20, color: "#fff" }} active name="user" />
          </Item>

          <Item style={styles.passInput}>
            <Input
              autoCapitalize="none"
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
              style={{ color: "#fff" }}
              placeholderTextColor={"rgba(255,255,255,0.5)"}
              placeholder="Password"
              secureTextEntry
            />
            <Icon style={{ fontSize: 20, color: "#fff" }} active name="key" />
          </Item>

          <TouchableOpacity onPress={Actions.forget}>
            <Text style={styles.forget}>
              Forgot Password?
              <Text style={{ color: "green" }}> Click Here</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={async () => {
              // Actions.home();
              await this.login();
            }}
          >
            <Button rounded style={styles.button}>
              <Text style={{ color: "#fff" }}>Login</Text>
            </Button>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  forget: {
    color: "white",
    marginTop: 20,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "rgba(0, 204, 102,0.9)",
  },
  heading: {
    fontSize: 35,
    marginTop: 5,
    fontFamily: "titleFont",
    paddingHorizontal: 10,
    color: "rgba(0, 204, 102,0.9)",
  },
  pnoInput: {
    paddingVertical: 10,
    width: "70%",
    height: 50,
    marginBottom: 10,
    paddingLeft: 10,
    marginTop: 100,
  },
  passInput: {
    paddingVertical: 10,
    width: "70%",
    height: 50,
    paddingLeft: 10,
  },
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  logo: {
    width: "70%",
    height: 150,
    resizeMode: "contain",
  },
});
