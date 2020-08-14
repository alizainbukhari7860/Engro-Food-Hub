import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
  KeyboardAvoidingView,
  Linking,
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
        <KeyboardAvoidingView behavior="position" style={styles.container}>
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
            onPress={() => {
              Alert.alert(
                "Complaint Cell",
                "Your complaint has been successfully submitted to the mess department.",
                [
                  {
                    text: "OK",
                    onPress: Actions.home,
                  },
                ],
                { cancelable: false }
              );
              Linking.openURL(
                `mailto:corpcomms@engro.com?subject=Customer Complaint&body=123`
              );
            }}
          >
            <Button
              rounded
              success
              style={{
                width: 150,
                justifyContent: "center",
                marginTop: 15,
                alignSelf: "center",
              }}
            >
              <Text>SEND EMAIL</Text>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${"+92 21 111 211 211"}`);
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                marginTop: 30,
                color: "#fff",
                fontSize: 18,
              }}
            >
              <Icon
                style={{ fontSize: 30, color: "#fff" }}
                active
                name="phone"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+92 21 111 211 211
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
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
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    alignItems: "center",
  },
  logo: {
    width: 150,
    alignSelf: "center",
    height: 170,
    resizeMode: "contain",
    marginTop: 10,
    opacity: 0.7,
  },
  heading: {
    alignSelf: "center",
    fontSize: 30,
    paddingHorizontal: 10,
    color: "rgba(0, 204, 102,0.9)",
  },
  text: {
    alignSelf: "center",
    color: "white",
    textAlign: "center",
    marginTop: 40,
    fontSize: 14,
    paddingHorizontal: 25,
  },
  email: {
    alignSelf: "center",
    paddingVertical: 10,
    width: "70%",
    height: 50,
    paddingLeft: 10,
    marginTop: 50,
  },
});
