import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { CategoryService } from '../../services/category/category-service';
import styles from './home-style';

export default function Home({ navigation }) {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories()
    }, [])
    const getCategories = () => {
        CategoryService.getCategories().then((res) => setCategories(res)).catch((err) => console.log(err))
    }
    return (
        <ScrollView style={styles.home}>
            {
                categories.map(category => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Category', { category })} style={styles.imgContainer} key={category.id}>
                            <Image style={[styles.img, styles.fullWidth]} source={{ uri: category.category_img }} />
                            <Text style={styles.text}>{category.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView >
    )
}