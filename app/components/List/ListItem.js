import React from 'react-native';
import {View, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ListItem = ({
    text, onPress, customIcon=null,
}) => (
    <TouchableOpacity underlayColor={styles.underlayColor} onPress={onPress}>
        <View style={styles.column}>
            <Text style={styles.text}>{text}</Text>
            {customIcon}
        </View>
    </TouchableOpacity>
    );

ListItem.propTypes={
    text: PropTypes.string,
    onPress: PropTypes.func,
    customIcon: PropTypes.element,
};

export default ListItem;