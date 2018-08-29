import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Header = () => (
    <View style={styles.container}>
        <Image 
            style={styles.image} 
            source={require('./images/Bentley_Master_horiz_rev_sml.png')}
            resizeMode="contain"
        />
    </View>
);

export default Header;