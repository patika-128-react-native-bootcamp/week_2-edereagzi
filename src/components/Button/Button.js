import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Button.styles'


const Button = ({title, onClick}) => {
    return (
        <TouchableOpacity
          style={styles.bottom_button}
          onPress={onClick}
        >
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button
