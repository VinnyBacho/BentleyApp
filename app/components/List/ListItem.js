import React from 'react-native';
import {View, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';

import styles from './styles';

const ListItem = ( text, onPress, customIcon = null, iconBackground) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.row}>
            <Icon
                iconImage={customIcon}
            />
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

ListItem.propTypes={
    text: PropTypes.string,
    onPress: PropTypes.func,
    customIcon: PropTypes.element,
    iconBackground: PropTypes.string,
};

export default ListItem;