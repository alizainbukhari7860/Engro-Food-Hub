import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Card, CardItem, Content } from "native-base";
import { Actions } from "react-native-router-flux";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class PreviousOrdersComponent extends Component {
  render() {
    return (
      <Content>
        <TouchableOpacity
          onPress={() => Actions.invoice({ order: this.props.order })}
        >
          <Card style={style.card}>
            <CardItem>
              <Text>{this.props.Date}</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </Content>
    );
  }
}

const style = StyleSheet.create({
  card: {
    padding: 1.5,
    backgroundColor: "green",
    borderRadius: 4,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
});
