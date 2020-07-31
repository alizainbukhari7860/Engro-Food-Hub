import React, { Component } from "react";
import {
  Card,
  CardItem,
  Text,
  View,
  Container,
  Header,
  Content,
  List,
  ListItem,
  Body,
  Grid,
  Col,
  Icon,
} from "native-base";

import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default class CartItem extends Component {
  render() {
    return (
      <Grid>
        <Col>
          <ListItem style={{ height: 60 }}>
            <TouchableOpacity onPress={() => this.props.changeQuantity(-1)}>
              <Icon
                style={{ fontSize: 30, color: "red" }}
                name="minus"
                type="Entypo"
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 25 }}> {this.props.quantity} </Text>
            <TouchableOpacity onPress={() => this.props.changeQuantity(1)}>
              <Icon
                style={{ fontSize: 35, color: "red" }}
                name="ios-add"
                type="Ionicons"
              />
            </TouchableOpacity>

            <Body>
              <Text>{this.props.name}</Text>
              <Text style={{ color: "grey", fontSize: 12 }}>
                Rs. {this.props.price} / item
              </Text>
            </Body>
            <TouchableOpacity
              onPress={() => this.props.deleteFromCart()}
              style={{ marginLeft: 60 }}
            >
              <Icon
                style={{
                  fontSize: 30,
                  color: "red",
                }}
                name="trash-o"
                type="FontAwesome"
              />
            </TouchableOpacity>
          </ListItem>
        </Col>
      </Grid>
    );
  }
}
