import React, { Component } from "react";
import {
  View,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  AsyncStorage,
  RefreshControl,
  Alert,
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
import { api } from "../APIs/api";
import QueryString from "qs";

const staticItems1 = [
  {
    name: "Soft Drink",
    category: "Beverages",
    Price: 40,
    ID: 1,
    Calories: 41,
  },
];
const staticItems2 = [
  {
    name: "Mixed Tea",
    category: "Hot Drinks",
    Price: 20,
    ID: 2,
    Calories: 200,
  },
];
const staticItems3 = [
  {
    name: "Mineral Water",
    category: "Beverages",
    Price: 30,
    ID: 3,
    Calories: 200,
  },
];
const staticItems4 = [
  {
    name: "Kachumar Salad",
    category: "Salads",
    Price: 40,
    ID: 4,
    Calories: 10,
  },
];

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
      cartItems: dishes ? dishes : [],
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
  placeOrder = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("user"));
    let total = 0;
    this.state.cartItems.forEach((e) => {
      total += e.Price * e.quantity;
    });
    let totalTime = 0;
    this.state.cartItems.forEach((e) => {
      totalTime += e.PreparationTime * e.quantity;
    });
    const itemArray = this.state.cartItems.map((e) => {
      return [e.ID, e.quantity];
    });
    console.log(this.state.cartItems);
    console.log(itemArray);
    await api.post(
      "/html/APIs/orders.php",
      QueryString.stringify({
        userId: user.ID,
        bill: total,
        pTime: totalTime,
        itemLength: this.state.cartItems.length,
        itemArray,
      })
    );
    Alert.alert("Order", "Your Order has Been Placed.", [
      { text: "OK", style: "cancel" },
    ]);
    await AsyncStorage.setItem("prepTime", JSON.stringify(totalTime));
    Actions.pendingOrder();
  };
  render() {
    let total = 0;
    this.state.cartItems.forEach((e) => {
      total += e.Price * e.quantity;
    });
    let totalCalories = 0;
    this.state.cartItems.forEach((e) => {
      totalCalories += Number(e.Calories) * e.quantity;
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
                {staticItems1.map((z) => {
                  return (
                    <TouchableOpacity
                      onPress={async () => {
                        const found = this.state.cartItems.find(
                          (item) => item.ID === z.ID
                        );
                        if (found) {
                          this.changeQuantity(1, found.ID);
                        } else {
                          const itemToAdd = {
                            ...z,
                            quantity: 1,
                            Price: Number(z.Price),
                          };
                          const cartItems = [
                            ...this.state.cartItems,
                            itemToAdd,
                          ];

                          await AsyncStorage.setItem(
                            "dishes",
                            JSON.stringify(cartItems)
                          );
                          this.setState({
                            cartItems,
                          });
                        }
                      }}
                    >
                      <CardItem
                        style={{
                          borderWidth: 0.5,
                          borderColor: "black",
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
                          <Text style={{ fontWeight: "bold" }}>{z.name}</Text>
                          <Text style={{ color: "grey" }}>{z.category}</Text>
                          <Text style={{ color: "grey" }}>Rs. {z.Price}</Text>
                        </View>
                      </CardItem>
                    </TouchableOpacity>
                  );
                })}
              </Card>
              <Card
                style={{
                  flexDirection: "row",
                  backgroundColor: "#e9ffe8",
                  marginBottom: 20,
                }}
              >
                {staticItems2.map((e) => {
                  return (
                    <TouchableOpacity
                      onPress={async () => {
                        const found = this.state.cartItems.find(
                          (item) => item.ID === e.ID
                        );
                        if (found) {
                          this.changeQuantity(1, found.ID);
                        } else {
                          const itemToAdd = {
                            ...e,
                            quantity: 1,
                            Price: Number(e.Price),
                          };
                          const cartItems = [
                            ...this.state.cartItems,
                            itemToAdd,
                          ];

                          await AsyncStorage.setItem(
                            "dishes",
                            JSON.stringify(cartItems)
                          );
                          this.setState({
                            cartItems,
                          });
                        }
                      }}
                    >
                      <CardItem
                        style={{
                          borderWidth: 0.5,
                          borderColor: "black",
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
                          <Text style={{ fontWeight: "bold" }}>{e.name}</Text>
                          <Text style={{ color: "grey" }}>{e.category}</Text>
                          <Text style={{ color: "grey" }}>Rs. {e.Price}</Text>
                        </View>
                      </CardItem>
                    </TouchableOpacity>
                  );
                })}
              </Card>
              <Card
                style={{
                  flexDirection: "row",
                  backgroundColor: "#e9ffe8",
                  marginBottom: 20,
                }}
              >
                {staticItems3.map((x) => {
                  return (
                    <TouchableOpacity
                      onPress={async () => {
                        const found = this.state.cartItems.find(
                          (item) => item.ID === x.ID
                        );
                        if (found) {
                          this.changeQuantity(1, found.ID);
                        } else {
                          const itemToAdd = {
                            ...x,
                            quantity: 1,
                            Price: Number(x.Price),
                          };
                          const cartItems = [
                            ...this.state.cartItems,
                            itemToAdd,
                          ];

                          await AsyncStorage.setItem(
                            "dishes",
                            JSON.stringify(cartItems)
                          );
                          this.setState({
                            cartItems,
                          });
                        }
                      }}
                    >
                      <CardItem
                        style={{
                          borderWidth: 0.5,
                          borderColor: "black",
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
                          <Text style={{ fontWeight: "bold" }}>{x.name}</Text>
                          <Text style={{ color: "grey" }}>{x.category}</Text>
                          <Text style={{ color: "grey" }}>Rs. {x.Price}</Text>
                        </View>
                      </CardItem>
                    </TouchableOpacity>
                  );
                })}
              </Card>
              <Card
                style={{
                  flexDirection: "row",
                  backgroundColor: "#e9ffe8",
                  marginBottom: 20,
                }}
              >
                {staticItems4.map((w) => {
                  return (
                    <TouchableOpacity
                      onPress={async () => {
                        const found = this.state.cartItems.find(
                          (item) => item.ID === w.ID
                        );
                        if (found) {
                          this.changeQuantity(1, found.ID);
                        } else {
                          const itemToAdd = {
                            ...w,
                            quantity: 1,
                            Price: Number(w.Price),
                          };
                          const cartItems = [
                            ...this.state.cartItems,
                            itemToAdd,
                          ];

                          await AsyncStorage.setItem(
                            "dishes",
                            JSON.stringify(cartItems)
                          );
                          this.setState({
                            cartItems,
                          });
                        }
                      }}
                    >
                      <CardItem
                        style={{
                          borderWidth: 0.5,
                          borderColor: "black",
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
                          <Text style={{ fontWeight: "bold" }}>{w.name}</Text>
                          <Text style={{ color: "grey" }}>{w.category}</Text>
                          <Text style={{ color: "grey" }}>Rs. {w.Price}</Text>
                        </View>
                      </CardItem>
                    </TouchableOpacity>
                  );
                })}
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
            <Text style={{ color: "grey", fontSize: 12 }}>
              ({totalCalories} Calories)
            </Text>
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
          onPress={this.placeOrder}
          style={{
            margin: 10,
          }}
        >
          <Button rounded style={style.button}>
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
