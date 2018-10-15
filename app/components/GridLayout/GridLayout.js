import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Foundation,
  Entypo
} from "@expo/vector-icons";
import PropTypes from "prop-types";

import styles from "./styles";

// const GridComponent = ({onPress, text, }) => (
//     <TouchableHighlight underlayColor={styles.underlayColor} onPress={onPress}>
//         <View style={styles.box}>

//             {/* <MaterialIcons
//                 name="school"
//                 size={60}
//                 style={[styles.image, styles.school]}
//             /> */}
//             <Text style={styles.text}>{text}}</Text>
//         </View>
//     </TouchableHighlight>
// );

class GridLayout extends Component {
  handleAcademicsPress = () => console.log("academics press");

  handleAthleticsPress = () => console.log("athletics press");

  handleBusPress = () => {
    this.props.navigation.navigate("BusTracker");
  };

  handleCoursePress = () => console.log("course press");

  handleDiningPress = () => console.log("dining press");

  handleDirectoryPress = () => console.log("directory press");

  handleEmergencyPress = () =>
    // Call 911 lol
    console.log("emergency press");

  handleEventsPress = () => console.log("events press");

  handleMapsPress = () => console.log("maps press");

  handleMaintenancePress = () => console.log("maintenance press");

  handleResidentPress = () => console.log("res-life press");

  handleResourcesPress = () => console.log("resources press");

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={styles.underlayColor}
          onPress={this.handleAcademicsPress}
        >
          <View style={styles.box}>
            <MaterialIcons
              name="school"
              size={60}
              style={[styles.image, styles.school]}
            />
            <Text style={styles.text}>Academics</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.underlayColor}
          onPress={this.handleAthleticsPress}
        >
          <View style={styles.box}>
            <MaterialCommunityIcons
              name="football-helmet"
              size={60}
              style={styles.image}
            />
            <Text style={styles.text}>Athletics</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.underlayColor}
          onPress={this.handleBusPress}
        >
          <View style={styles.box}>
            <MaterialCommunityIcons
              name="bus"
              size={60}
              style={[styles.image, styles.bus]}
            />
            <Text style={styles.text}>Bus Tracker</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.underlayColor}
          onPress={this.handleCoursePress}
        >
          <View style={styles.box}>
            <Entypo name="open-book" size={60} style={styles.image} />
            <Text style={styles.text}>Course Catalog</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.underlayColor}
          onPress={this.handleDiningPress}
        >
          <View style={styles.box}>
            <MaterialCommunityIcons
              name="food"
              size={60}
              style={[styles.image, styles.food]}
            />
            <Text style={styles.text}>Dining</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.underlayColor}
          onPress={this.handleDirectoryPress}
        >
          <View style={styles.box}>
            <MaterialCommunityIcons
              name="magnify"
              size={60}
              style={[styles.image, styles.directory]}
            />
            <Text style={styles.text}>Directory</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.underlayColor}
          onPress={this.handleEmergencyPress}
        >
          <View style={styles.box}>
            <MaterialCommunityIcons
              name="hospital"
              size={60}
              style={[styles.image, styles.emergency]}
            />
            <Text style={styles.text}>Emergency</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.underlayColor}
          onPress={this.handleEventsPress}
        >
          <View style={styles.box}>
            <MaterialCommunityIcons
              name="calendar"
              size={60}
              style={[styles.image, styles.events]}
            />
            <Text style={styles.text}>Events</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.underlayColor}
          onPress={this.handleMaintenancePress}
        >
          <View style={styles.box}>
            <FontAwesome
              name="wrench"
              size={60}
              style={[styles.image, styles.maintenance]}
            />
            <Text style={styles.text}>Maintenance</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.underlayColor}
          onPress={this.handleMapsPress}
        >
          <View style={styles.box}>
            <Foundation
              name="map"
              size={60}
              style={[styles.image, styles.map]}
            />
            <Text style={styles.text}>Map</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.underlayColor}
          onPress={this.handleResidentPress}
        >
          <View style={styles.box}>
            <FontAwesome
              name="home"
              size={60}
              style={[styles.image, styles.resident]}
            />
            <Text style={styles.text}>Residential Life</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.underlayColor}
          onPress={this.handleResourcesPress}
        >
          <View style={styles.box}>
            <FontAwesome
              name="cogs"
              style={[styles.image, styles.resources]}
              size={60}
            />
            <Text style={styles.text}>Resources</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
GridLayout.propTypes = {
  navigation: PropTypes.object
};

export default GridLayout;
