import React from 'react'
import {View,StyleSheet,Text,SafeAreaView,SectionList} from 'react-native'
// import categories from '../../category'

import { SubCategory } from '../../subcategories'
const Category = () => {
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>)
  return (
    <SafeAreaView style={styles.container}>
       <SectionList
       style={styles.categoryview}
      sections={SubCategory}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
    {/* <View style={styles.container}>
        <Text style={styles.item}>
        {categories.map((item,index)=>{
          return (
            <View style={styles.categoryview}>
          <Text> {item.title}</Text>
          </View>
          )
        })}
        </Text>
        </View> */}
        </SafeAreaView>
  )
}
export default Category
const styles=StyleSheet.create({
container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    // flexDirection:'column',
},
item:{
  // flex:1,
  fontWeight:'bold'
},
categoryview:{
 flexWrap:'wrap',
 //paddingHorizontal:100,
}
})