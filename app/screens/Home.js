import React, { Component } from 'react';
import { StatusBar, FlatList, Text} from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { ListItem, Icon } from '../components/List';
import { GridLayout } from '../components/GridLayout';

const TEMP_TEXT = 'Bentley University';

clickPress = () => {
    console.log("beep");
};


class Home extends Component {
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStlye="light-content"/>
                <Header />
                <GridLayout/>           
            </Container>
        );
    }
}

export default Home;