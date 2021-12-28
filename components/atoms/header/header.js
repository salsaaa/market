import { Image, View, Text } from "react-native";
import styles from "./header-style";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const Header = ({ showDrawer, color, categoryName }) => {
    return (
        <View style={[styles.header, showDrawer ? '' : styles.widthBackBtn]}>
            {showDrawer && <Image style={styles.icon} source={require('../../../assets/icons/drawer.png')} />}
            {!showDrawer && <Text style={styles.title}>{categoryName}</Text>}
            <View style={styles.right}>
                <AntDesign name="search1" size={24} color={color} />
                <MaterialCommunityIcons name="cart-outline" size={24} color={color} />
            </View>
        </View>
    );
}

export default Header;