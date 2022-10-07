import React from 'react'
import { View,StyleSheet,Text, SafeAreaView,ScrollView,Image,TextInput } from 'react-native'
import ProductsList from '../../data'

const Home = () => {
  return (
    <SafeAreaView>
        <ScrollView >
        <View style={styles.container}>
        <Text style={styles.heading} >E Kart</Text>
        <TextInput returnKeyType='search' style={styles.search}/>
        {ProductsList.map((item,index)=>{
          return(
            <View style={styles.item}>
              {/* <Text >{item.id}</Text> */}
              <Image source={{uri:item.image}} style = {styles.imageView} /> 
              <Text style={styles.heading}>{item.title}</Text>
              <Text>{item.Description}</Text>
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          )
        })}
        </View>
        </ScrollView>
      </SafeAreaView>
  )
}
export default Home
const styles=StyleSheet.create({
container:{
  backgroundColor:'smokywhite',
  padding:5,
  margin:5,
 
},
item:{
  // display:'flex',
  //flexWrap:'wrap',
  flexDirection:'column',
  margin:5,
  backgroundColor:'skyblue'
},
heading:{
  fontWeight:'bold',
  textAlign:'center'
},
search:{
  backgroundColor:'white',
  borderColor:'green',
  borderRadius:60,
  padding:10,
  margin:3
},
rating:{
  fontWeight:'bold',
  textAlign:'right'
},
imageView:{
  marginHorizontal:80,
  // marginVertical:50,
  height:200,
  width:200,
  alignContent:'center',
  justifyContent:'center',
  alignItems:'center'
}
})