import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TouchableWithoutFeedbackBase, FlatList, TextInput } from 'react-native'
import Badge from './components/Badge/Badge'
import ProductCard from './components/ProductCard/ProductCard'
import ProductInput from './components/ProductInput/ProductInput'
const App = () => {
  
  const [data, setData] = useState([])
  const [selectedBtn, setSelectedBtn] = useState('')

  useEffect(() => {
    sortItems(selectedBtn)
  }, [data])


  const addProduct = (text) => {
    setData([...data,text])    
  }

  const handleClick = (type) => {
    sortItems(type)
    setSelectedBtn(type)
  }

  const sortItems = (type) => {
    if(type == 'asc'){
      data.sort((a, b) => parseFloat(a.priceInput) - parseFloat(b.priceInput));
    }
    if(type == 'desc'){
      data.sort((a, b) => parseFloat(b.priceInput) - parseFloat(a.priceInput));
    }
    if(type == 'date'){
      data.sort((a, b) => parseFloat(a.date) - parseFloat(b.date));
    }
  }

  const renderItem = ({ item }) => (
    <ProductCard item={item} dataLen={data.length}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Badge onClick={text => handleClick(text)}/>
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.bottom_container}>
        <ProductInput click={text => addProduct(text)}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },

  bottom_container: {
    borderTopWidth:1,
    borderTopColor:'black',
    padding:10,
  },

})

export default App