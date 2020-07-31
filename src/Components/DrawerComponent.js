import React, { Component } from "react";
import { Text, View, Image, StyleSheet, AsyncStorage } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";
export default class DrawerComponent extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#fff", paddingTop: 25 }}>
        <TouchableOpacity onPress={Actions.home}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              paddingBottom: 25,
              borderBottomColor: "rgba(0,0,0,0.1)",
              borderBottomWidth: 1,
            }}
          >
            <Image
              style={{ width: "100%", height: 80, resizeMode: "contain" }}
              source={require("../Images/logo.png")}
            ></Image>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.home} style={styles.button}>
          <View style={styles.iconHolder}>
            <Ionicons style={styles.icon} name="ios-home"></Ionicons>
          </View>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.profile} style={styles.button}>
          <View style={styles.iconHolder}>
            <Ionicons style={styles.icon} name="md-person"></Ionicons>
          </View>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.cart} style={styles.button}>
          <View style={styles.iconHolder}>
            <Ionicons style={styles.icon} name="md-cart"></Ionicons>
          </View>
          <Text style={styles.text}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.pendingOrder} style={styles.button}>
          <View style={styles.iconHolder}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="clock-fast"
            ></MaterialCommunityIcons>
          </View>
          <Text style={styles.text}>My Order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={Actions.previousOrders}
          style={styles.button}
        >
          <View style={styles.iconHolder}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="history"
            ></MaterialCommunityIcons>
          </View>
          <Text style={styles.text}>Previous Bills</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.contact} style={styles.button}>
          <View style={styles.iconHolder}>
            <Ionicons style={styles.icon} name="md-person"></Ionicons>
          </View>
          <Text style={styles.text}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.faq} style={styles.button}>
          <View style={styles.iconHolder}>
            <Ionicons style={styles.icon} name="md-cart"></Ionicons>
          </View>
          <Text style={styles.text}>FAQs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem("user");
            Actions.login();
          }}
          style={styles.button}
        >
          <View style={styles.iconHolder}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="logout"
            ></MaterialCommunityIcons>
          </View>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 20,
    color: "#000",
  },
  iconHolder: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
  },
  text: {
    flex: 1,
    fontSize: 20,
  },
});
