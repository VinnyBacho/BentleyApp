import React from 'react-native';
import {View, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';

import styles from './styles';

const ListItem = ( text, onPress, visible = true, customIcon = null, iconBackground) => (
    <TouchableOpacity>
        <View>
            <Text>{text}</Text>
        </View>
    </TouchableOpacity>
);

ListImte.propTypes={
    text: PropTypes.string,
    onPress: PropTypes.func,
    visible: PropTypes.bool,
    customIcon: PropTypes.element,
    iconBackground: PropTypes.string,
};

export default ListItem;