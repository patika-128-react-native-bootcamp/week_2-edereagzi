import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Badge.styles'

const Badge = ({onClick}) => {

    const [selectedBtn, setSelectedBtn] = useState('')
    const handleClick = (type) => {
        onClick(type)

    }

    return (
        <View style={styles.top_button_container}>
          <TouchableOpacity
            style={selectedBtn === 'asc' ? styles.top_selected_button : styles.top_button}
            onPress={() => handleClick('asc')}>
            <Text style={styles.text}>Artan Fiyat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selectedBtn === 'desc' ? styles.top_selected_button : styles.top_button}
            onPress={() => handleClick('desc')}>
            <Text style={styles.text}>Azalan Fiyat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selectedBtn === 'date' ? styles.top_selected_button : styles.top_button}
            onPress={() => handleClick('date')}>
            <Text style={styles.text}>Tarih</Text>
          </TouchableOpacity>
        </View>
    )
}

export default Badge
