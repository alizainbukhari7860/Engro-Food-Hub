import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { Item, Input, Button, Form, Textarea, Fab } from "native-base";
import { Actions } from "react-native-router-flux";

export default class ContactUs extends Component {
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
            source={require("../Images/contact.png")}
          ></Image>
          <Text style={styles.heading}>Contact Us</Text>

          <Form>
            <Textarea
              rowSpan={5}
              bordered
              rounded
              placeholder="How May We Help You?"
              style={{
                width: 300,
                marginTop: 20,
                color: "white",
                padding: 5,
                borderRadius: 20,
              }}
            />
          </Form>
          <TouchableOpacity
            onPress={() => alert("Complaint Registered Successfully!")}
          >
            <Button
              rounded
              success
              style={{
                width: 150,
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <Text>SUBMIT</Text>
            </Button>
          </TouchableOpacity>
          <Text style={{ marginTop: 20, color: "#fff", fontSize: 18 }}>
            <Icon style={{ fontSize: 30, color: "#fff" }} active name="phone" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+92 21 111 211 211
          </Text>
          <Text style={{ marginTop: 10, color: "#fff", fontSize: 16 }}>
            <Icon
              style={{ fontSize: 30, color: "#fff" }}
              active
              name="envelope"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;corpcomms@engro.com
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "rgba(0, 204, 102,0.9)",
  },

  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  logo: {
    width: "60%",
    height: 170,
    resizeMode: "contain",
    marginTop: 10,
    opacity: 0.7,
  },
  heading: {
    fontSize: 30,
    paddingHorizontal: 10,
    color: "rgba(0, 204, 102,0.9)",
  },
  text: {
    color: "white",
    textAlign: "center",
    marginTop: 40,
    fontSize: 14,
    paddingHorizontal: 25,
  },
  email: {
    paddingVertical: 10,
    width: "70%",
    height: 50,
    paddingLeft: 10,
    marginTop: 50,
  },
});
