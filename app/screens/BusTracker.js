import React, { Component } from "react";
import { ScrollView, StatusBar, Linking, View } from "react-native";
import { List, ListItem } from "react-native-elements";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Seperator } from "../components/List";

const list = [
  {
    title: "Live Bus Tracker",
    icon: "link"
  },
  {
    title: "Harvard Square Timetable",
    icon: "library-books"
  },
  {
    title: "Bentley Loop Timetable",
    icon: "library-books"
  }
];

const HarvardSquare = "../Harvard Square 18.pdf";

const BentleyLoop = "../BentleyLoop 18.pdf";

class BusTracker extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  handleButtonPress = pressed => {
    if (pressed === "Live Bus Tracker") {
      Linking.openURL("http://bentleyshuttle.com").catch(() =>
        this.props.alertWithType(
          "error",
          "Sorry!",
          "BentleyShuttle can not be opened right now"
        )
      );
    } else if (pressed === "Harvard Square Timetable") {
      this.props.navigation.navigate("HarvardSquarePDF");
    }
    // else if (pressed === "Bentley Loop Timetable") {
    //     this.props.navigation.navigate('BentleyLoopPDF');
    // }
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" translucent={false} />
        <View style={{ backgroundColor: "white" }}>
          <Seperator />
          {list.map(item => (
            <ListItem
              key={item.title}
              title={item.title}
              leftIcon={{ name: item.icon }}
              rightIcon={{ name: "keyboard-arrow-right" }}
              onPress={() => this.handleButtonPress(item.title)}
              underlayColor="#E2E2E2"
              translucent={false}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default BusTracker;
