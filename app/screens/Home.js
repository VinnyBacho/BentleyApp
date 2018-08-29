import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';

const TEMP_TEXT = 'Bentley University';

class Home extends Component {
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStlye="light-content"/>
                <Header />
                
            </Container>
        );
    }
}

export default Home;