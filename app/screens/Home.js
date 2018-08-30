import React, { Component } from 'react';
import { StatusBar, FlatList, Text} from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { ListItem } from '../components/List';

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
                <FlatList
                    renderItem={() => (
                        <ListItem 
                            text={TEMP_TEXT}
                            onPress={() => this.clickPress()}
                        />
                    )}
                    keyExtractor={item => item}
                />
                <Text>Hello</Text>
            </Container>
        );
    }
}

export default Home;