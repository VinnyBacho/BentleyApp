import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        '@media ios': {
            paddingTop: 20,
        },
        backgroundColor: '#0075BE',
    },
    image: {
        width: imageWidth,
        height: 100,
        paddingVertical: 20,
    }, 
});