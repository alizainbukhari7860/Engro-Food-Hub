import React from "react";
import { Router, Stack, Scene, Drawer } from "react-native-router-flux";
import SplashScreen from "./src/Screens/SplashScreen";
import Login from "./src/Screens/Login";
import Home from "./src/Screens/Home";
import Invoice from "./src/Screens/Invoice";
import Profile from "./src/Screens/Profile";
import MyCart from "./src/Screens/MyCart";
import ForgotPassword from "./src/Screens/ForgotPassword";
import DrawerComponent from "./src/Components/DrawerComponent";
import * as font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import PendingOrder from "./src/Screens/PendingOrder";
import PreviousOrders from "./src/Screens/PreviousOrders";
import FAQ from "./src/Screens/FAQ";
import ContactUs from "./src/Screens/ContactUs";
console.disableYellowBox = true;

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  componentDidMount = async () => {
    await font.loadAsync({
      titleFont: require("./assets/OleoScript-Regular.ttf"),
    });
    this.setState({
      fontLoaded: true,
    });
  };
  render() {
    return this.state.fontLoaded ? (
      <Router>
        <Stack hideNavBar key="root">
          <Drawer
            drawerIcon={() => <Ionicons size={25} name="md-menu"></Ionicons>}
            contentComponent={DrawerComponent}
            key="drawer"
          >
            <Stack key="internal">
              <Scene title={"Home"} key="home" component={Home}></Scene>
              <Scene
                title={"Profile"}
                key="profile"
                component={Profile}
              ></Scene>
              <Scene
                title={"Invoice"}
                key="invoice"
                component={Invoice}
              ></Scene>
              <Scene title={"Cart"} key="cart" component={MyCart}></Scene>
              <Scene
                title={"ContactUs"}
                key="contact"
                component={ContactUs}
              ></Scene>
              <Scene
                title={"PendingOrder"}
                key="pendingOrder"
                component={PendingOrder}
              ></Scene>
              <Scene title={"FAQ"} key="faq" component={FAQ}></Scene>
              <Scene
                title={"PreviousOrders"}
                key="previousOrders"
                component={PreviousOrders}
              ></Scene>
            </Stack>
          </Drawer>
          <Scene key="forget" component={ForgotPassword}></Scene>
          <Scene key="splash" initial component={SplashScreen}></Scene>
          <Scene key="login" component={Login}></Scene>
        </Stack>
      </Router>
    ) : null;
  }
}
