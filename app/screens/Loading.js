import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { LoadingLogo } from '../components/Logo';

const TEMP_TEXT = 'Bentley University';

class Loading extends Component {
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStlye="light-content"/>
                <LoadingLogo />
            </Container>
        );
    }
}

export default Loading;