import React from 'react'
import { View,StyleSheet,Text } from 'react-native'

const Cart = () => {
  return (
    <View style={styles.container}>
        <Text>Cart</Text></View>
  )
}

export default Cart
const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}

})