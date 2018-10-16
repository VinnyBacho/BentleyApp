import { createStackNavigator } from "react-navigation";
import { StatusBar } from "react-native";

import Home from "../screens/Home";
import BusTracker from "../screens/BusTracker";
// import BentleyLoopPDF from '../screens/BentleyLoopPDF';
import HarvardSquarePDF from "../screens/HarvardSquarePDF";

// export default createStackNavigator(
//   {
//     Home: Home,
//     BusTracker: BusTracker,
//     HarvardSquarePDF: HarvardSquarePDF
//   },
//   {
//     headerMode: "none"
//   }
// );

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    BusTracker: {
      screen: BusTracker,
      navigationOptions: {
        headerTitle: "Bus Tracker"
      }
    },
    HarvardSquarePDF: {
      screen: HarvardSquarePDF,
      navigationOptions: {
        headerTitle: "Harvard Square PDF"
      }
    }
  },
  {
    headerMode: "screen"
  }
);

export default createStackNavigator(
  {
    Home: {
      screen: HomeStack
    }
  },
  {
    mode: "modal",
    cardStyle: { paddingTop: 0 },
    headerMode: "none"
  }
);
