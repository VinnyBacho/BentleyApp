import EStyleSheet from 'react-native-extended-stylesheet';

import {Dimensions} from 'react-native';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
        //TODO: Make this not hard coded
        // top: 25,
        // bottom: 25,
    },
    box: {
        margin: 2,
        marginVertical: 13,
        width: Dimensions.get('window').width / 4 - 6,
        height: Dimensions.get('window').width / 4 - 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        height: 60,
        width: 60,
        textAlign: 'center',
        //TODO: Find good color and style combinations
        color: '$bentleyLightBlue',
        //borderRadius: 30,
        //backgroundColor: '$bentleyLightBlue',
    },
    text: {
        flex: 1,
        height: 40,
        // flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'center',
    },
    school: {
        color: 'black',
    },
    bus: {
        color: '$bentleyYellow',
    },
    food: {
        color: '$bentleyYellow',
    },
    directory: {
        color: '$bentleyDarkBlue',
    },
    emergency: {
        color: '$red',    
    },
    events: {
        color: '$orange',
    },
    map: {
        color: '$googleMapsGreen',
    },
    maintenance: {
        color: '$bentleyDarkGrey',
    },
    resident: {
        color: '$darkRed',
    },
    resources: {
        color: '$bentleyLightGrey',
    },
    underlayColor: {
        color: 'black',
    },
});