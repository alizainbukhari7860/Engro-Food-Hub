import React, { Component } from "react";
import { Text, Image } from "react-native";
import { Card, CardItem, Left, Body, Button, Right, View } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class MenuItem extends Component {
  render() {
    return (
      <Card
        style={{
          backgroundColor: "white",
          borderRadius: 30,
          borderTopRadius: 10,
          marginBottom: 10,

          shadowColor: "#acff99",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 6,
        }}
      >
        <CardItem
          style={{
            borderRadius: 30,
            borderColor: "black",
            borderWidth: 1,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomWidth: 0,
          }}
        >
          <Image
            style={{
              height: 80,
              width: 100,
              borderTopLeftRadius: 30,
            }}
            source={this.props.image}
          />
          <Body>
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                fontSize: 20,
                paddingLeft: 10,
              }}
            >
              {this.props.name}
            </Text>
            <Text style={{ color: "grey", paddingLeft: 10 }}>
              {this.props.category}
            </Text>
            <Text style={{ color: "grey", paddingLeft: 10 }}>
              {this.props.calories} Calories
            </Text>
          </Body>
        </CardItem>

        <CardItem
          style={{
            borderRadius: 30,
            borderColor: "black",
            borderWidth: 1,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderTopWidth: 0,
          }}
        >
          <Body>
            <Text>Rs. {this.props.price}</Text>
          </Body>
          <Body>
            <Text>{this.props.prepTime} minutes</Text>
          </Body>
          <Right>
            <TouchableOpacity
              onPress={async () => {
                await this.props.addToCart();
                alert(this.props.name + " added to cart");
              }}
            >
              <Icon size={30} name="cart-plus" />
            </TouchableOpacity>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
