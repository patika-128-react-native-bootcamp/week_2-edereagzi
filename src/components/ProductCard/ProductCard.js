import React from 'react'
import { View, Text } from 'react-native'
import styles from './ProductCard.styles'

const ProductCard = ({ item, dataLen }) => {
    return (
        <View>
            <View style={styles.item_container}>
                <Text style={styles.item_name_text}>{item.nameInput}</Text>
                <Text style={styles.item_name_text}>{item.priceInput}</Text>
            </View>
            {dataLen > 1 && <View style={styles.item_line} />}
        </View>
    )
}

export default ProductCard
