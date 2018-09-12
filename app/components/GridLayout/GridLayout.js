import React, {Component} from 'react';
import {Text, View, TouchableHighlight } from 'react-native';
import {MaterialIcons, MaterialCommunityIcons, FontAwesome, Foundation, Entypo} from '@expo/vector-icons';

import styles from './styles';

export default class GridLayout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor={styles.underlayColor} onPress={console.log("press")}>
                    <View style={styles.box}>
                        <MaterialIcons 
                            name="school"
                            size={60}
                            style={[styles.image, styles.school]}
                        />
                        <Text style={styles.text}>Academics</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.box}>
                    <MaterialCommunityIcons 
                        name="football-helmet"
                        size={60}
                        style={styles.image} 
                    />
                    <Text style={styles.text}>Athletics</Text>
                </View>
                <View style={styles.box}>
                    <MaterialCommunityIcons 
                        name="bus"
                        size={60}
                        style={[styles.image, styles.bus]}  
                    />
                    <Text style={styles.text}>Bus Tracker</Text>
                </View>
                <View style={styles.box}>
                    <Entypo 
                        name="open-book"
                        size={60}
                        style={styles.image}    
                    />
                    <Text style={styles.text}>Course Catalog</Text>
                </View>
                <View style={styles.box}>
                    <MaterialCommunityIcons 
                        name="food"
                        size={60}
                        style={[styles.image, styles.food]}
                         
                    />
                    <Text style={styles.text}>Dining</Text>
                </View>
                <View style={styles.box}>
                    <MaterialCommunityIcons 
                        name="magnify"
                        size={60}
                        style={[styles.image, styles.directory]}
                    />
                    <Text style={styles.text}>Directory</Text>
                </View>
                <View style={styles.box}>
                    <MaterialCommunityIcons 
                        name="hospital"
                        size={60}
                        style={[styles.image, styles.emergency]}
                    />
                    <Text style={styles.text}>Emergency</Text>
                </View>
                <View style={styles.box}>
                    <MaterialCommunityIcons 
                        name="calendar"
                        size={60}
                        style={[styles.image, styles.events]}
                    />
                    <Text style={styles.text}>Events</Text>
                </View>
                <View style={styles.box}>
                    <Foundation 
                        name="map"
                        size={60}
                        style={[styles.image, styles.map]} 
                    />
                    <Text style={styles.text}>Map</Text>
                </View>
                <View style={styles.box}>
                    <FontAwesome 
                        name="wrench"
                        size={60}
                        style={[styles.image, styles.maintenance]}
                    />
                    <Text style={styles.text}>Maintenance</Text>
                </View>
                <View style={styles.box}>
                    <FontAwesome 
                        name="home"
                        size={60}
                        //@Todo: align items
                        style={[styles.image, styles.resident]}
                    />
                    <Text style={styles.text}>Residential Life</Text>
                </View>
                <View style={styles.box}>
                    <FontAwesome 
                        name="cogs"
                        style={[styles.image, styles.resources]}
                        size={60}
                    />
                    <Text style={styles.text}>Resources</Text>
                </View>
            </View>
        );
    }
}