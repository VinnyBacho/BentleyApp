import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    iconContainer: {
        width: 25,
        height: 25,
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
    icon: {
        backgroundColor: 'transparent',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    seperator: {
        marginLeft: 20,
        backgroundColor: '$bentleyLightBlue',
        flex: 1,
        height: 2,
    },
});