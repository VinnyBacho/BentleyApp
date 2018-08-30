import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Icon = ({iconImage}) => {
    return (
        <View style={styles.icon}>
            <Image resizeMode="contain" source={require(iconImage)}></Image>
        </View>
    )
};

Icon.propTypes = {
    iconImage: PropTypes.object,
};

export default Icon;