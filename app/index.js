import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

EStyleSheet.build({
    $bentleyLightBlue: '#0075BE',
    $bentleyDarkBlue: '#365375',
    $bentleyLightGrey: '#B3C4CC',
    $bentleyDarkGrey: '#7B858F',
    $bentleyYellow: '#FFBC00',

    $red: '#FF4100',
    $darkRed: '#822F2B',
    $orange: '#FF8E00',
    $googleMapsGreen: '#1EA362',

    // $outline: 1,
});

export default () => <Navigator />;