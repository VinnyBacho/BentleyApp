import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const GridItem = ({ text, onPress, customIcon = null }) => (
  <TouchableHighlight underlayColor={styles.underlayColor} onPress={onPress}>
    <View style={styles.box}>
      {customIcon}
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableHighlight>
);

GridItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  customIcon: PropTypes.element,
  navigation: PropTypes.object
};

export default GridItem;
