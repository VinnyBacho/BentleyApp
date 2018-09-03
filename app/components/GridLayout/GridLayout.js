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
                    <Text style={styles.text}>Academics</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text style={styles.text}>Athletics</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text style={styles.text}>Bus Tracker</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text style={styles.text}>Course Catalog</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text style={styles.text}>Dining</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text style={styles.text}>Directory</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text style={styles.text}>Emergency</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text style={styles.text}>Events</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text style={styles.text}>Map</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text style={styles.text}>Maintenance</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text style={styles.text}>Residential Life</Text>
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.image}
                        resizeMode="contain" 
                        source={require('./images/_ionicons_svg_md-school.png')}
                    />
                    <Text style={styles.text}>Resources</Text>
                </View>
            </View>
        );
    }
}