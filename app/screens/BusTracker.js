import React, { Component } from 'react';
import { FlatList, View, StatusBar, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { List, ListItem } from 'react-native-elements';

const list = [
    {
        title: 'Live Bus Tracker',
        icon: 'av-timer'
    },
    {
        title: 'Timetable PDF',
        icon: 'flight-takeoff'
    }
]

class BusTracker extends Component {
    handleButtonPress = () => {
        console.log("Hello there");
    };

    render() {
        return (
            <View>
                <StatusBar barStyle="default" translucent={false} />
                <List>
                    {
                        list.map((item) => (
                            <ListItem
                                key={item.title}
                                title={item.title}
                                rightIcon={{ name: item.icon }}
                            />
                        ))
                    }
                </List>

            </View>

        );
    }
}

export default BusTracker;
