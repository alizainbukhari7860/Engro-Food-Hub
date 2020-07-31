import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import {
  Container,
  Card,
  CardItem,
  Content,
  Body,
  Accordion,
  Icon,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const dataArray = [
  {
    title: "What are the timings for ordering something?",
    content:
      "Timings for breakfast, lunch, snacks and dinner are 0630-0900, 1200-1430, 1530-1700 and 1900-2300 hours respectively.",
  },
  {
    title: "Can I cancel my order?",
    content:
      "Yes, in order to cancel your order you have to call Engro Management Club before your preparation time is over.",
  },
  {
    title: "Can I place an order in advance?",
    content:
      "No, you can only place order according to the shifts i.e. Breakfast, Lunch, Snacks and Dinner.",
  },
  {
    title: "Are there any extra charges?",
    content: "There are no extra charges.",
  },
  {
    title: "Does my order come with napkins and utensils?",
    content:
      "Yes, in most of the meals, the order comes with a pair of napkins and utencils.",
  },
  {
    title: "Can i place an order for someone else?",
    content:
      "Yes you can but the bill will be added in the account from where the order is placed account.",
  },
];

export default class FAQ extends Component {
  _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#75d97a",
          marginVertical: 3,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "bold" }}> {item.title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18 }} name="remove-circle" />
        ) : (
          <Icon style={{ fontSize: 18 }} name="add-circle" />
        )}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#c5e8c7",
          padding: 10,
          fontStyle: "italic",
          borderRadius: 20,
        }}
      >
        {item.content}
      </Text>
    );
  }

  render() {
    return (
      <Container>
        <ImageBackground
          style={{
            width: "100%",
            flex: 1,
          }}
          source={require("../Images/question.png")}
        >
          <Image
            style={{
              width: "100%",
              height: 120,
              resizeMode: "contain",
              marginTop: 10,
            }}
            source={require("../Images/help.png")}
          />
          <ScrollView>
            <Content padder style={{}}>
              <Accordion
                dataArray={dataArray}
                animation={true}
                expanded={true}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                style={{ borderWidth: 0 }}
              />
            </Content>
          </ScrollView>
        </ImageBackground>
      </Container>
    );
  }
}
