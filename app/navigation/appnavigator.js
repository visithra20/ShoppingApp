import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Category from '../screens/Category'
import Home from '../screens/Home'
// import HomeSvg from '../../assets/svg/home'
import Cart from '../screens/Cart'
import Profile  from '../screens/Profile'
// import { MaterialIcons } from '@expo/vector-icons';
const Tab=createBottomTabNavigator()
const Appnavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} 
    //     option={{tabBarIcon:()=>(
    //     <MaterialIcons name="headset" size={24} color={black}/>
    //     ),
    // }}
        />
        <Tab.Screen name='Category' component={Category}/>
        <Tab.Screen name='Cart' component={Cart}/>
        <Tab.Screen name='Profile' component={Profile }/>
    </Tab.Navigator>
  )
}

export default Appnavigator