import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerImg: {
        width: '100%',
        height: 207
    },
    itemImg: {
        width: '100%',
        height: 150
    },
    item: {
        width: '50%',
        borderColor: '#F6F6F6',
    },
    items: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        backgroundColor: 'white',
    },
    borderRight: {
        borderRightWidth: 2
    },
    borderTop: {
        borderTopWidth: 2
    },
    title: {
        textAlign: 'center',
        padding: 14,
        fontSize: 18,
        borderBottomColor: '#FC5C5C',
        borderBottomWidth: 2,
        backgroundColor: 'white',
        fontWeight: 'bold',
        borderColor: '#F6F6F6',
        borderTopWidth: 2,
    },
    itemText: {
        lineHeight: 19,
        fontSize: 13
    },
    itemTitle: {
        fontWeight: '700',
        fontSize: 16
    },
    itemBody: {
        padding: 10
    },
    footer: {
        backgroundColor: '#FC5C5C',
        width: '100%',
        height: 50,
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    footerText: {
        color: 'white',
        textAlign: 'center',
        width: '50%',
        fontWeight: 'bold',
        fontSize: 15
    },
    itemFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemIcon: {
        backgroundColor: '#D3D3D3',
        borderRadius: 50,
        width: 22,
        height: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

})
export default styles