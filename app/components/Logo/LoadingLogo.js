import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

class LoadingLogo extends Component {
    render () {
        return (
            <Image
                style={styles.logo}
                source={require('./images/Bentley_Wallpaper_iPhone_640x960_4a.jpg')}
            />
        );
    }
}

export default LoadingLogo;