import React, { useState } from 'react'
import { TextInput, View, Text } from 'react-native'
import styles from './ProductInput.styles'
import Button from '../Button/Button'

const ProductInput = ({click}) => {

    const [nameInput, setNameInput] = useState('')
    const [priceInput, setPriceInput] = useState('')


    const handleSetText = () => {
        if(nameInput !== '' && priceInput !== ''){
            click({nameInput,priceInput,date:Date.now()})
            setNameInput('')
            setPriceInput('')
        }
    }

    return (
        <View>
            <Text style={styles.text_input_header}>Name</Text>
            <TextInput onChangeText={setNameInput} value={nameInput} style={styles.text_input} />
            <Text style={styles.text_input_header}>Price</Text>
            <TextInput onChangeText={setPriceInput} value={priceInput} style={styles.text_input} />
            <Button title='Add' onClick={handleSetText} />
        </View>


    )
}

export default ProductInput