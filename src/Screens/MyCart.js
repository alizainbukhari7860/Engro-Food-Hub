import React, { Component } from "react";
import {
  View,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  AsyncStorage,
  RefreshControl,
} from "react-native";

import CartItem from "../Components/CartItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Button,
  Container,
  ListItem,
  Root,
  ActionSheet,
  Card,
  Body,
  CardItem,
} from "native-base";
import { Actions } from "react-native-router-flux";

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class Home extends Component {
  state = {
    cartItems: [
      {
        name: "",
        price: "",
        category: "",
        calories: "",
      },
    ],
    refresh: false,
  };
  componentDidMount = async () => {
    const dishes = JSON.parse(await AsyncStorage.getItem("dishes"));
    this.setState({
      cartItems: dishes,
    });
  };
  deleteFromCart = async (id) => {
    const dishes = this.state.cartItems.filter((e) => e.ID !== id);
    await AsyncStorage.setItem("dishes", JSON.stringify(dishes));
    this.setState({
      cartItems: dishes,
    });
  };
  changeQuantity = async (value, ID) => {
    const dishes = [...this.state.cartItems];
    const dishIndex = this.state.cartItems.findIndex((e) => e.ID == ID);
    if (dishIndex >= 0) {
      dishes[dishIndex].quantity = dishes[dishIndex].quantity + value;
      if (dishes[dishIndex].quantity == 0) {
        await this.deleteFromCart(ID);
      } else {
        await AsyncStorage.setItem("dishes", JSON.stringify(dishes));
        this.setState({
          cartItems: dishes,
        });
      }
    }
  };
  render() {
    let total = 0;
    this.state.cartItems.forEach((e) => {
      total += e.Price * e.quantity;
    });
    return (
      <Container style={{ backgroundColor: "#e9ffe8" }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refresh}
              onRefresh={async () => {
                this.setState(
                  {
                    refresh: true,
                  },
                  async () => {
                    const dishes = JSON.parse(
                      await AsyncStorage.getItem("dishes")
                    );
                    this.setState(
                      {
                        cartItems: dishes,
                      },
                      () => this.setState({ refresh: false })
                    );
                  }
                );
              }}
            />
          }
        >
          <FlatList
            data={this.state.cartItems}
            keyExtractor={(item, index) => "" + index}
            renderItem={(obj) => {
              return (
                <CartItem
                  changeQuantity={(value) =>
                    this.changeQuantity(value, obj.item.ID)
                  }
                  name={obj.item.name}
                  quantity={obj.item.quantity}
                  category={obj.item.category}
                  price={obj.item.Price}
                  deleteFromCart={() => this.deleteFromCart(obj.item.ID)}
                ></CartItem>
              );
            }}
          ></FlatList>
          <View
            style={{
              paddingVertical: 20,
            }}
          >
            <Text
              style={{
                marginLeft: 3,
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              Suggested Items
            </Text>

            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <Card
                style={{
                  flexDirection: "row",
                  backgroundColor: "#e9ffe8",
                  marginBottom: 20,
                }}
              >
                <TouchableOpacity>
                  <CardItem
                    style={{
                      borderWidth: 0.5,
                      borderColor: "black",
                      marginRight: 5,
                      backgroundColor: "#dbffea",
                      height: 80,
                      width: 150,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>Soft Drink</Text>
                      <Text style={{ color: "grey" }}>Beverages</Text>
                      <Text style={{ color: "grey" }}>Rs. 40</Text>
                    </View>
                  </CardItem>
                </TouchableOpacity>

                <TouchableOpacity>
                  <CardItem
                    style={{
                      borderWidth: 0.5,
                      borderColor: "black",
                      marginRight: 5,
                      backgroundColor: "#dbffea",
                      height: 80,
                      width: 150,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>Item 1</Text>
                      <Text style={{ color: "grey" }}>Category</Text>
                      <Text style={{ color: "grey" }}>Rs. 100</Text>
                    </View>
                  </CardItem>
                </TouchableOpacity>

                <TouchableOpacity>
                  <CardItem
                    style={{
                      borderWidth: 0.5,
                      borderColor: "black",
                      marginRight: 5,
                      backgroundColor: "#dbffea",
                      height: 80,
                      width: 150,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>Item 1</Text>
                      <Text style={{ color: "grey" }}>Category</Text>
                      <Text style={{ color: "grey" }}>Rs. 100</Text>
                    </View>
                  </CardItem>
                </TouchableOpacity>

                <TouchableOpacity>
                  <CardItem
                    style={{
                      borderWidth: 0.5,
                      borderColor: "black",
                      marginRight: 5,
                      backgroundColor: "#dbffea",
                      height: 80,
                      width: 150,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>Item 1</Text>
                      <Text style={{ color: "grey" }}>Category</Text>
                      <Text style={{ color: "grey" }}>Rs. 100</Text>
                    </View>
                  </CardItem>
                </TouchableOpacity>

                <TouchableOpacity>
                  <CardItem
                    style={{
                      borderWidth: 0.5,
                      borderColor: "black",
                      marginRight: 5,
                      backgroundColor: "#dbffea",
                      height: 80,
                      width: 150,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>Item 1</Text>
                      <Text style={{ color: "grey" }}>Category</Text>
                      <Text style={{ color: "grey" }}>Rs. 100</Text>
                    </View>
                  </CardItem>
                </TouchableOpacity>
              </Card>
            </ScrollView>
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Total&nbsp;&nbsp;
            <Text style={{ color: "grey", fontSize: 12 }}>(including GST)</Text>
          </Text>
          <Text
            style={{
              flex: 1,
              textAlign: "right",
              marginRight: 20,
              fontSize: 20,
            }}
          >
            Rs. {total}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            margin: 10,
          }}
        >
          <Button rounded style={style.button} onPress={Actions.invoice}>
            <Text style={style.buttonText}>Place Order</Text>
          </Button>
        </TouchableOpacity>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  button: {
    height: 60,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(0, 204, 102,0.9)",
  },
});
