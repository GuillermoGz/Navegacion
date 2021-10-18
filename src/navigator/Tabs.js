import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tabs1 from '../screens/Tabs1';
import Tabs2 from '../screens/Tabs2';
import Tabs3 from '../screens/Tabs3';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tabs1" component={Tabs1} />
      <Tab.Screen name="Tabs2" component={Tabs2} />
      <Tab.Screen name="StackNavigator" component={StackNavigator} />
    </Tab.Navigator>
  )
}

export default Tabs