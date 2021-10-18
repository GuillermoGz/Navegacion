import React from 'react'
import {createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer'

import StackNavigator from './StackNavigator'

import SettingsScreen from '../screens/SettingsScreen'
import { useWindowDimensions, View,Image, TouchableOpacity, Text } from 'react-native'
import styles from '../theme/Styles'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Tabs'

const Drawer = createDrawerNavigator()



const MenuLateral = (props) => {
    const {width}  = useWindowDimensions()
    return (
     <Drawer.Navigator
        drawerType={ width >= 300 ? 'permanent' : 'front'}
        drawerContent={(props)=> <MenuInterno {...props}/>}>
         <Drawer.Screen name='Tabs' component={Tabs}/>
         <Drawer.Screen name='SettingsScreen' component={SettingsScreen}/>
     </Drawer.Navigator>
    )
}
const MenuInterno = ({navigation}) => {
return (
    <DrawerContentScrollView>
        <View style={styles.containeravatar}>
            <Image
            source={{
                uri:"https://thumbs.dreamstime.com/b/imagen-del-placeholder-perfil-silueta-gris-ninguna-foto-127393523.jpg"
            }}
            style={styles.avatar}/>
        </View>
        <View style={styles.menuContainer}>
            <TouchableOpacity
            style={styles.menuBoton}
            onPress = {()=> navigation.navigate('Tabs')}>
                <Text style={styles.menuTexto}>Navegacion</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.menuBoton}
            onPress = {()=> navigation.navigate('SettingsScreen')}>
                <Text style={styles.menuTexto}>Ajustes</Text>
            </TouchableOpacity>
        </View>
    </DrawerContentScrollView>
)}
export default MenuLateral