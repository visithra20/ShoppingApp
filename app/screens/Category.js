import React from 'react'
import { View,StyleSheet,Text,Image, FlatList } from 'react-native'
import categories from '../../category'
const Category = () => {
  // const Data=useState(data)
  return (
    <View style={styles.container}>
        <Text style={styles.item} >
        {categories.map((item,index)=>{
          return (<Text>{item.id} {item.title}  </Text>
          )
        })}
        </Text>
        {/* <Text>{Data.map((item,index)=>{
        return (
          {item}
          )
        }
        )}</Text> */}
        </View>
       
  )
}

export default Category
const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
},
item:{
  // display:'flex',
  flex:1,
  // flexDirection:'column',
  // justifyContent:'center',
  // alignItems:'center'
}


})