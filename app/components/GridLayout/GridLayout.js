import React, {Component} from 'react';
import {Text, View, Image } from 'react-native';

import styles from './styles';

export default class GridLayout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text>Academics</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text>Athletics</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text>Bus Tracker</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text>Course Catalog</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text>Dining</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text>Directory</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text>Emergency</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text>Events</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text>Map</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text>Maintenance</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text>Residential Life</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text>Resources</Text>
                </View>
            </View>
        );
    }
}