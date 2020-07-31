import React, { Component } from "react";
import {
  ScrollView,
  FlatList,
  View,
  ImageBackground,
  AsyncStorage,
  StatusBar,
} from "react-native";
import {
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Container,
  Fab,
} from "native-base";
import MenuItem from "../Components/MenuItem";
import { api } from "../APIs/api";
import { Actions } from "react-native-router-flux";
import { Entypo } from "@expo/vector-icons";
export default class Home extends Component {
  state = {
    dishes: [
      {
        name: "",
        category: "",
        price: "",
        prepTime: "",
        image: "",
      },
    ],
    search: "",
  };

  async componentDidMount() {
    await this.home();
  }

  home = async () => {
    const response = await api.get("/html/APIs/getiteminfo.php");
    this.setState({ dishes: response.data });
  };
  addToCart = async (dish) => {
    const dishes = JSON.parse(await AsyncStorage.getItem("dishes"))
      ? JSON.parse(await AsyncStorage.getItem("dishes"))
      : [];
    const dishIndex = dishes.findIndex((e) => e.ID == dish.ID);
    if (dishIndex >= 0) {
      dishes[dishIndex].quantity = dishes[dishIndex].quantity + 1;
    } else {
      dishes.push({
        ...dish,
        quantity: 1,
      });
    }
    await AsyncStorage.setItem("dishes", JSON.stringify(dishes));
  };

  render() {
    const dishesToRender = this.state.dishes.filter((e) =>
      e.name.startsWith(this.state.search)
    );
    return (
      <Container>
        <ImageBackground
          style={{
            width: "100%",
            flex: 1,
          }}
          source={require("../Images/back-Copy.jpg")}
        >
          <Item
            rounded
            style={{
              width: "99%",
              marginTop: 5,
              backgroundColor: "white",
              opacity: 0.8,
            }}
          >
            <Input
              style={{ marginLeft: 10 }}
              placeholder="Search"
              onChangeText={(text) => {
                this.setState({
                  search: text,
                });
              }}
            />
            <Icon
              name="search"
              type="FontAwesome"
              style={{ marginHorizontal: 10 }}
            />
          </Item>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dishesToRender}
            keyExtractor={(item, index) => "" + index}
            renderItem={({ item }) => {
              return (
                <MenuItem
                  name={item.name}
                  prepTime={item.PreparationTime}
                  calories={item.Calories}
                  price={item.Price}
                  category={item.Category}
                  image={require("../Images/food1.jpg")}
                  addToCart={() => this.addToCart(item)}
                ></MenuItem>
              );
            }}
          ></FlatList>
          <Fab
            style={{ backgroundColor: "#11a305", zIndex: 20 }}
            position="bottomRight"
            onPress={Actions.cart}
          >
            <Entypo name="shopping-cart" size={24} color="black" />
          </Fab>
        </ImageBackground>
      </Container>
    );
  }
}
