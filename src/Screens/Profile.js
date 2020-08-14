import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text } from "native-base";
import { StyleSheet, ImageBackground, AsyncStorage } from "react-native";
import { api } from "../APIs/api";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";

export default class Profile extends Component {
  state = {
    members: [
      {
        PersonalNumber: "",
        Username: "",
        Designation: "",
        Address: "",
        Email: "",
        PhoneNumber: "",
        UserVehicleRegistrationNumber: "",
      },
    ],
  };

  render() {
    return (
      <Container>
        <ImageBackground
          style={{
            width: "100%",
            flex: 1,
          }}
          source={require("../Images/back-Copy.jpg")}
        >
          <Content padder>
            <Card>
              <CardItem header bordered>
                <FontAwesome style={style.icon} name="vcard"></FontAwesome>
                <Text style={style.headerText}>{this.props.user.Username}</Text>
              </CardItem>

              <CardItem bordered>
                <Feather style={style.icon} name="hash"></Feather>
                <Text style={style.text}>{this.props.user.PersonalNumber}</Text>
              </CardItem>

              <CardItem bordered>
                <Ionicons style={style.icon} name="md-person"></Ionicons>
                <Text style={style.text}>{this.props.user.Designation}</Text>
              </CardItem>

              <CardItem bordered>
                <Ionicons style={style.icon} name="md-home"></Ionicons>
                <Text style={style.text}>{this.props.user.Address}</Text>
              </CardItem>

              <CardItem bordered>
                <Ionicons style={style.icon} name="ios-mail"></Ionicons>
                <Text style={style.text}>{this.props.user.Email}</Text>
              </CardItem>

              <CardItem bordered>
                <MaterialCommunityIcons
                  style={style.icon}
                  name="phone"
                ></MaterialCommunityIcons>
                <Text style={style.text}>{this.props.user.PhoneNumber}</Text>
              </CardItem>

              <CardItem bordered>
                <Ionicons style={style.icon} name="ios-car"></Ionicons>
                <Text style={style.text}>
                  {this.props.user.UserVehicleRegistrationNo}
                </Text>
              </CardItem>
            </Card>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  icon: {
    fontSize: 25,
    marginRight: 20,
  },
  text: {
    fontSize: 14,
    marginRight: 20,
  },
  footerIcon: {
    fontSize: 18,
  },
  headerText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
  },
});
