import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Category from '../screens/Category'
import Home from '../screens/Home'
import Cart from '../screens/Cart'
import Profile  from '../screens/Profile'
// import { MaterialIcons } from '@expo/vector-icons';
const Tab=createBottomTabNavigator()
const Appnavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} 
        // option={{tabBarIcon:({color,size})=>(
        // <MaterialIcons name="headset" size={size} color={color}/>
        //),}}
        />
        <Tab.Screen name='Category' component={Category}/>
        <Tab.Screen name='Cart' component={Cart}/>
        <Tab.Screen name='Profile' component={Profile }/>
    </Tab.Navigator>
  )
}

export default Appnavigator