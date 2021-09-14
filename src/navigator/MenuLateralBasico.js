import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import StackNavigator from './StackNavigator'

import SettingsScreen from '../screens/SettingsScreen'
import { useWindowDimensions } from 'react-native'

const Drawer = createDrawerNavigator()



const MenuLateralBasico = () => {
    const width = useWindowDimensions()
    return (
     <Drawer.Navigator
        drawerType={ width >= 300 ? 'front' : 'permanent'}>
         <Drawer.Screen name='StackNavigator' options={{title:'Home'}} component={StackNavigator}/>
         <Drawer.Screen name='SettingsScreen' options={{title:'Settings'}} component={SettingsScreen}/>
     </Drawer.Navigator>
    )
}

export default MenuLateralBasico