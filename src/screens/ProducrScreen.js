import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../store/productsSlice';


export default function ProducrScreen() {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)

    const navigation = useNavigation()
    return (
        <FlatList data={products} renderItem={({ item }) => (

            <Pressable onPress={() => {
                dispatch(setSelectedProduct(item.id))
                navigation.navigate('Product Detail')
            }} style={styles.itemContainer}>

                <Image source={{ uri: item.image }}
                    style={styles.image} />

            </Pressable>)} numColumns={2} />
    )
}


const styles = StyleSheet.create({

    image: { width: '100%', aspectRatio: 1 },
    itemContainer: {
        width: '50%',
        padding: 1

    }
});