import React from 'react'
import { IndexLoginContainer } from '@/Containers'
import DrawerStackContainer from '../Containers/DrawerStackContainer'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const RootStackContainer = ({ navigation }) => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Startup" component={IndexLoginContainer} />
    <Stack.Screen name="Dashboard" component={DrawerStackContainer} />
  </Stack.Navigator>
)

export default RootStackContainer
