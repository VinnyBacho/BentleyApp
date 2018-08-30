import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = () => (
    <View style={styles.icon}>
        <Image 
            style={styles.image}
            resizeMode="contain" 
            source={require('./images/_ionicons_svg_md-school.png')} 
        />
    </View>
);

export default Icon;