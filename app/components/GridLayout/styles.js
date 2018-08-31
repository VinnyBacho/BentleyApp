import EStyleSheet from 'react-native-extended-stylesheet';

import {Dimensions} from 'react-native';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
    },
    box: {
        margin: 2,
        marginTop: 25,
        width: Dimensions.get('window').width / 4 - 6,
        height: Dimensions.get('window').width / 4 - 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        height: 50,
        width: 50,
    }
});