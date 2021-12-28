import { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./category-details-style";
import { AntDesign } from '@expo/vector-icons';

const CategoryDetails = ({ navigation, route, setCategoryName }) => {
    const [category, setCategory] = useState({})
    useEffect(() => {
        setCategory(route.params.category)
        setCategoryName(route.params.category.name)
    }, [])
    return (
        <>
            <Image style={styles.headerImg} source={{ uri: category.category_img }} />
            <Text style={styles.title}>{category.name}</Text>
            <View style={styles.items}>
                {
                    category.products && category.products.map((product, index) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Product', { name: product.name })} style={[styles.item, index % 2 == 0 && styles.borderRight, (index !== 0 && index !== 1) && styles.borderTop]}>
                                <Image style={styles.itemImg} source={{ uri: product.product_img }} />
                                <View style={styles.itemBody}>
                                    <Text style={[styles.itemText, styles.itemTitle]}>{product.name}</Text>
                                    <Text style={styles.itemText}>{product.weight}</Text>
                                    <View style={styles.itemFooter}><Text style={styles.itemText}>{product.price}</Text><TouchableOpacity style={styles.itemIcon}><AntDesign name="plus" size={12} color="#878787" /></TouchableOpacity></View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Sort By</Text>
                <Text style={styles.footerText}>Filter</Text>
            </View>
        </>
    );
}

export default CategoryDetails;