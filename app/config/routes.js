import { createStackNavigator } from "react-navigation";
import { StatusBar } from "react-native";

import Home from "../screens/Home";
import BusTracker from "../screens/BusTracker";
// import BentleyLoopPDF from '../screens/BentleyLoopPDF';
import HarvardSquarePDF from "../screens/HarvardSquarePDF";

export default createStackNavigator(
  {
    Home: Home,
    BusTracker: BusTracker,
    HarvardSquarePDF: HarvardSquarePDF
  },
  {
    headerMode: "none"
  }
);

// export default createStackNavigator({
//     Home: {
//         screen: HomeStack,
//     },
// }, {
//         mode: 'modal',
//         cardStyle: {
//             paddingTop: StatusBar.currentHeight
//         },
//         headerMode: 'none',
//     });
