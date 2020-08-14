import React, { Component } from "react";
import { Text, View, ImageBackground, AsyncStorage } from "react-native";
import CountDown from "react-native-countdown-component";

export default class PendingOrder extends Component {
  state = {
    totalTime: null,
  };
  componentDidMount = async () => {
    const totalTime = JSON.parse(await AsyncStorage.getItem("prepTime"));
    this.setState({ totalTime: totalTime * 60 });
  };
  render() {
    return this.state.totalTime ? (
      <ImageBackground
        source={require("../Images/back-Copy.jpg")}
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View>
          <CountDown
            size={30}
            until={this.state.totalTime}
            onFinish={() => alert("Your order is ready!")}
            digitStyle={{
              backgroundColor: "white",
              borderWidth: 3,
              borderColor: "#f74848",
            }}
            digitTxtStyle={{ color: "#26bf4f" }}
            timeLabelStyle={{ color: "#fa2020", fontWeight: "bold" }}
            separatorStyle={{ color: "red" }}
            timeToShow={["H", "M", "S"]}
            timeLabels={{ m: null, s: null }}
            showSeparator
            timeToShow={["H", "M", "S"]}
            timeLabels={{ h: "Hours", m: "Minutes", s: "Seconds" }}
          />
        </View>
      </ImageBackground>
    ) : null;
  }
}
