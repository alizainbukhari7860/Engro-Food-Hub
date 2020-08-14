import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Items", "Quantity", "Item Cost", "Amount"],
      tableData: [
        ["Coke", "2", "50", "100"],
        ["Biryani", "1", "70", "70"],
        ["Shawarma Platter", "3", "120", "360"],
        ["Chicken Macronis", "2", "90", "180"],
      ],
    };
  }

  render() {
    const state = this.state;
    console.log(this.props.order);
    var t = this.props.order.Date.split(/[- :]/);
    var d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
    const quantities = this.props.order.quantities.split(",");
    const prices = this.props.order.prices.split(",");
    let total = 0;
    const items = this.props.order.items.split(",").map((item, index) => {
      total += prices[index] * quantities[index];
      return [
        item,
        quantities[index],
        prices[index],
        prices[index] * quantities[index],
      ];
    });

    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            resizeMode: "contain",
            justifyContent: "center",
            paddingTop: 10,
          }}
        >
          <Image
            style={{
              width: 90,
              height: 60,
            }}
            source={require("../Images/logo.png")}
          />
          <Text style={{ fontSize: 14, color: "green" }}>Food Hub</Text>
        </View>
        <View
          style={{
            margin: 10,
          }}
        >
          <Text style={{ padding: 5, fontWeight: "bold" }}>
            Name :
            <Text style={{ fontWeight: "normal" }}>
              {this.props.order.Username}
            </Text>
          </Text>
          <Text style={{ padding: 5, fontWeight: "bold" }}>
            Date :
            <Text style={{ fontWeight: "normal" }}>{d.toDateString()}</Text>
          </Text>
          <Text style={{ padding: 5, fontWeight: "bold" }}>
            Time :
            <Text style={{ fontWeight: "normal" }}>
              {d.toLocaleTimeString()}
            </Text>
          </Text>
        </View>
        <View>
          <Table style={{ padding: 5 }}>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={items} textStyle={styles.text} />
          </Table>
        </View>

        <Text
          style={{
            margin: 5,
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            paddingVertical: 5,
          }}
        >
          TOTAL
          <Text style={{ fontWeight: "normal" }}> : Rs. {total}</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  head: { height: 40, backgroundColor: "#d6ffd6" },
  text: { margin: 5, fontSize: 10 },
});
