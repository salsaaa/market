import { Dimensions, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'stretch',
        width: '97%',
        flexDirection: 'row'
    },
    widthBackBtn: {
        width: '91%',
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 65
    },
    title: {
        color: '#F0F0F0',
        fontWeight: '700',
        fontSize: 18
    }


})
export default styles