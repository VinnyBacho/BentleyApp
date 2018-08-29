import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import Loading from './screens/Loading';

EStyleSheet.build({
    $bentleyLightBlue: '#0075BE',
    $bentleyDarkBLue: '#365375',
    $bentleyLightGrey: '#B3C4CC',
    $bentleyDarkGrey: '#7B858F',
    $bentleyYellow: '#F0B82D',
});

export default () => <Home />;