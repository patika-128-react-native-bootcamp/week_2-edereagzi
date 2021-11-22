import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    item_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
      },
      item_name_text: {
        color: '#bdbdbd',
        fontSize: 20
      },
      item_price_text: {
        color: '#37474f',
        fontSize: 20
      },
      item_line: {
        borderWidth:1,
        borderColor:'#37474f'
      },
})