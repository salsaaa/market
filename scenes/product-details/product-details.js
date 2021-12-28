import { useEffect, useState } from "react";
import { Text } from "react-native";
import styles from "./product-details-style";

const ProductDetails = ({ route }) => {
    const [name, setName] = useState('')
    useEffect(() => {
        setName(route.params.name)
    }, [])
    return (<Text style={styles.text}>{name}</Text>);
}

export default ProductDetails;