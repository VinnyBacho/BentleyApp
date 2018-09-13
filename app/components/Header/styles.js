import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions, Platform, NativeModules } from 'react-native';

const { StatusBarManager } = NativeModules;

const imageWidth = Dimensions.get('window').width;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;


export default EStyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        paddingTop: STATUSBAR_HEIGHT,
        backgroundColor: '#0075BE',
        alignItems: 'center',
        flex: 1,
    },
    image: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: imageWidth - 50,
        height: 100,
    }, 
});