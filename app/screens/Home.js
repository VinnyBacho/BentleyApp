import React, { Component } from "react";
import { StatusBar, Linking, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Foundation,
  Entypo
} from "@expo/vector-icons";
import PropTypes from "prop-types";

import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { GridItem } from "../components/GridLayout";
import { Footer } from "../components/Footer";

const TEMP_TEXT = "Bentley University";

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  handleAcademicsPress = () => {
    Linking.openURL("https://blackboard.bentley.edu").catch(err =>
      console.error("An error occurred", err)
    );
  };

  handleAthleticsPress = () => {
    //TODO: make this navigate to correct link
    this.props.navigation.navigate("BusTracker");
  };
  handleBusPress = () => {
    this.props.navigation.navigate("BusTracker");
  };
  handleCoursePress = () => {
    console.log("handleCoursePress");
  };
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
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header />
        <View style={styles.container}>
          <GridItem
            text="Academics"
            onPress={this.handleAcademicsPress}
            customIcon={
              <MaterialIcons
                name="school"
                size={60}
                textAlgin="center"
                style={styles.school}
              />
            }
          />
          <GridItem
            text="Athletics"
            onPress={this.handleAthleticsPress}
            customIcon={
              <MaterialCommunityIcons
                name="football-helmet"
                size={60}
                textAlign="center"
                style={styles.athletics}
              />
            }
          />
          <GridItem
            text="Bus Tracker"
            onPress={this.handleBusPress}
            customIcon={
              <MaterialCommunityIcons
                name="bus"
                size={60}
                textAlign="center"
                style={styles.bus}
              />
            }
          />
          <GridItem
            text="Course Catalog"
            onPress={this.handleCoursePress}
            customIcon={
              <Entypo name="open-book" size={60} style={styles.book} />
            }
          />
          <GridItem
            text="Dining"
            onPress={this.handleDiningPress}
            customIcon={
              <MaterialCommunityIcons
                name="food"
                size={60}
                style={styles.food}
              />
            }
          />
          <GridItem
            text="Directory"
            onPress={this.handleDirectoryPress}
            customIcon={
              <MaterialCommunityIcons
                name="magnify"
                size={60}
                style={styles.directory}
              />
            }
          />
          <GridItem
            text="Emergency"
            onPress={this.handleEmergencyPress}
            customIcon={
              <MaterialCommunityIcons
                name="hospital"
                size={60}
                style={styles.emergency}
              />
            }
          />
          <GridItem
            text="Events"
            onPress={this.handleEventsPress}
            customIcon={
              <MaterialCommunityIcons
                name="calendar"
                size={60}
                style={styles.events}
              />
            }
          />
          <GridItem
            text="Maintenance"
            onPress={this.handleEventsPress}
            customIcon={
              <FontAwesome name="wrench" size={60} style={styles.maintenance} />
            }
          />
          <GridItem
            text="Maps"
            onPress={this.handleMapsPress}
            customIcon={<Foundation name="map" size={60} style={styles.map} />}
          />
          <GridItem
            text="Residential Life"
            onPress={this.handleResidentPress}
            customIcon={
              <FontAwesome name="home" size={60} style={styles.resident} />
            }
          />
          <GridItem
            text="Resources"
            onPress={this.handleResourcesPress}
            customIcon={
              <FontAwesome name="cogs" style={styles.resources} size={60} />
            }
          />
        </View>
        <Footer />
      </Container>
    );
  }
}

export default Home;

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 2
  },
  school: {
    color: "black"
  },
  athletics: {
    color: "$bentleyLightBlue"
  },
  bus: {
    color: "$bentleyYellow"
  },
  book: {
    color: "$bentleyLightBlue"
  },
  food: {
    color: "$bentleyYellow"
  },
  directory: {
    color: "$bentleyDarkBlue"
  },
  emergency: {
    color: "$red"
  },
  events: {
    color: "$orange"
  },
  map: {
    color: "$googleMapsGreen"
  },
  maintenance: {
    color: "$bentleyDarkGrey"
  },
  resident: {
    color: "$darkRed"
  },
  resources: {
    color: "$bentleyLightGrey"
  }
});
