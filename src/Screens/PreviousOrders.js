import React, { Component } from "react";
import { View } from "native-base";
import PreviousOrdersComponent from "../Components/PreviousOrdersComponent";
import { ScrollView, FlatList, ImageBackground } from "react-native";
import { api } from "../APIs/api";

export default class PreviousOrders extends Component {
  state = {
    previousOrderItems: [
      {
        ID: "",
        PersonalNumber: "",
        Username: "",
        items: "",
        prices: "",
        quantities: "",
        categories: "",
        pTime: "",
        Date: "",
        User: "",
        Bill: "",
      },
    ],
  };

  async componentDidMount() {
    await this.previousOrders();
  }

  previousOrders = async () => {
    const response = await api.get("/html/APIs/userOrders.php");

    this.setState({ previousOrderItems: response.data });
  };

  render() {
    return (
      <ImageBackground
        style={{
          width: "100%",
          flex: 1,
        }}
        source={require("../Images/back-Copy.jpg")}
      >
        <View>
          <ScrollView>
            <FlatList
              data={this.props.orders}
              keyExtractor={(item, index) => "" + index}
              renderItem={(obj) => {
                return (
                  <PreviousOrdersComponent
                    order={obj.item}
                    Date={obj.item.Date}
                  ></PreviousOrdersComponent>
                );
              }}
            ></FlatList>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
