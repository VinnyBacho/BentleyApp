import React, {Component} from 'react';
import {Text, View, Image } from 'react-native';
import {Ionicons, MaterialCommunityIcons, FontAwesome, Foundation, Entypo} from '@expo/vector-icons';

import styles from './styles';

export default class GridLayout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Ionicons 
                        name="md-school"
                        size={50}
                        style={styles.image}
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Academics</Text>
                </View>
                <View style={styles.box}>
                    <MaterialCommunityIcons 
                        name="football-helmet"
                        size={50}
                        style={styles.image}
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Athletics</Text>
                </View>
                <View style={styles.box}>
                    <FontAwesome 
                        name="bus"
                        size={50}
                        style={styles.image}
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Bus Tracker</Text>
                </View>
                <View style={styles.box}>
                <Entypo 
                        name="open-book"
                        size={50}
                        style={styles.image}
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Course Catalog</Text>
                </View>
                <View style={styles.box}>
                    <MaterialCommunityIcons 
                        name="food"
                        size={50}
                        style={styles.image}
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Dining</Text>
                </View>
                <View style={styles.box}>
                <MaterialCommunityIcons 
                        name="magnify"
                        size={50}
                        style={styles.image}
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Directory</Text>
                </View>
                <View style={styles.box}>
                <MaterialCommunityIcons 
                        name="hospital"
                        size={50}
                        style={styles.image}
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Emergency</Text>
                </View>
                <View style={styles.box}>
                <FontAwesome 
                        name="calendar"
                        size={50}
                        style={styles.image}
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Events</Text>
                </View>
                <View style={styles.box}>
                    <Foundation 
                        name="map"
                        size={50}
                        style={styles.image}
                        resizeMode="contain"
                        textAlign="center" 
                    />
                    <Text style={styles.text}>Map</Text>
                </View>
                <View style={styles.box}>
                <FontAwesome 
                        name="wrench"
                        size={50}
                        style={styles.image}
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Maintenance</Text>
                </View>
                <View style={styles.box}>
                <FontAwesome 
                        name="building"
                        size={50}
                        //@Todo: align items
                        alignItems="center"
                        style={styles.image}
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Residential Life</Text>
                </View>
                <View style={styles.box}>
                <Ionicons 
                        name="md-school"
                        style={styles.image}
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Resources</Text>
                </View>
            </View>
        );
    }
}