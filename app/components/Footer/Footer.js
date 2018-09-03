import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Footer = () => (
    <View style={styles.container}>
        <Text style={styles.text}>This was not developed by Bentley University.</Text>
        <Text style={styles.text}>They absolutely do not support this. Yet.</Text>
    </View>
);

export default Footer;