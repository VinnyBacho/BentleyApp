import React from 'react-native';
import {View, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';

import styles from './styles';

const ListItem = ( text, onPress) => (
    <TouchableOpacity underlayColor={styles.underlayColor} onPress={onPress}>
        <View style={styles.column}>
            <Icon />
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

ListItem.propTypes={
    text: PropTypes.string,
    onPress: PropTypes.func,
};

export default ListItem;