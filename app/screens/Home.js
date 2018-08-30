import React, { Component } from 'react';
import { StatusBar, Text, Image } from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Icon } from '../components/List';

const TEMP_TEXT = 'Bentley University';

class Home extends Component {
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStlye="light-content"/>
                <Header />
                <Icon />
                <Text>{TEMP_TEXT}</Text>
            </Container>
        );
    }
}

export default Home;