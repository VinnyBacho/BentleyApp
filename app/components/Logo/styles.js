import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
    $width: imageWidth,
    $height: imageHeight,
    container: {
        alignItems: 'center',
    },
    logo: {
        width: '$width',
        height: '$height',    
    },
});