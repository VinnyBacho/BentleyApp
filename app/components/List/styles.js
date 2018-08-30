import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    icon: {
        width: 18,
        height: 18,
    },
    column: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$bentleyDarkBlue',
    },
    text: {
        fontSize: 16,
    },
    image: {
        backgroundColor: '$bentleyLightBlue',
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
});