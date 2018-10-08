import React, { Component } from 'react';
import { StatusBar, FlatList, Text } from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { GridLayout } from '../components/GridLayout';
import { Footer } from '../components/Footer';

const TEMP_TEXT = 'Bentley University';

class Home extends Component {
    render() {
        return (
            <Container>
                <StatusBar backgroundColor='blue' barStyle="light-content" />
                <Header />
                <GridLayout />
                <Footer />
            </Container>
        );
    }
}

export default Home;