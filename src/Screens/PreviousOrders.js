import React, { Component } from "react";
import { View } from "native-base";
import PreviousOrdersComponent from "../Components/PreviousOrdersComponent";
import { ScrollView, FlatList } from "react-native";

export default class PreviousOrders extends Component {
  state = {
    previousOrderItems: [
      {
        date: "1/13/2020",
        time: "8:45"
      },
      {
        date: "2/14/2020",
        time: "9:45"
      },
      {
        date: "3/15/2020",
        time: "10:45"
      },
      {
        date: "4/16/2020",
        time: "11:45"
      },
      {
        date: "5/17/2020",
        time: "12:45"
      },
      {
        date: "6/18/2020",
        time: "13:45"
      },
      {
        date: "7/19/2020",
        time: "14:45"
      },
      {
        date: "8/20/2020",
        time: "15:45"
      },
      {
        date: "9/21/2020",
        time: "16:45"
      },
      {
        date: "10/22/2020",
        time: "17:45"
      },
      {
        date: "11/23/2020",
        time: "18:45"
      },
      {
        date: "12/24/2020",
        time: "19:45"
      },

      {
        date: "13/25/2020",
        time: "20:45"
      },

      {
        date: "14/26/2020",
        time: "21:05"
      },

      {
        date: "15/27/2020",
        time: "22:45"
      },

      {
        date: "16/28/2020",
        time: "23:45"
      }
    ]
  };

  render() {
    return (
      <View>
        <ScrollView>
          <FlatList
            data={this.state.previousOrderItems}
            keyExtractor={(item, index) => "" + index}
            renderItem={obj => {
              return (
                <PreviousOrdersComponent
                  date={obj.item.date}
                  time={obj.item.time}
                ></PreviousOrdersComponent>
              );
            }}
          ></FlatList>
        </ScrollView>
      </View>
    );
  }
}
