import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerStackContainer from '../Containers/DrawerStackContainer'
import { IndexStartupContainer, IndexLoginContainer } from '@/Containers'
import { useSelector } from 'react-redux'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { SafeAreaView, StatusBar, Platform } from 'react-native'
import Toast from 'react-native-toast-message'
import { useTheme } from '@/Theme'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff0000',
    accent: '#000000',
    text: '#ff0000',
    background: '#ffffff',
    contained: '#000000',
  },
  dark: true,
}

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const [isLogin, setLogin] = useState(false)
  const applicationIsLoading = useSelector(state => state.startup.loading)

  useEffect(() => {
    getData()
  }, [applicationIsLoading])

  const getData = async () => {
    try {
      setLogin(false)
      const value = await AsyncStorage.getItem('accessToken')
      if (value !== null) {
        setLogin(true)
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  }

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(
    () => () => {
      setLogin(false)
    },
    [],
  )

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: '#545454' }]}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator headerMode="none">
          {Platform.OS === 'ios' ? (
            <Stack.Screen name="Startup" component={IndexStartupContainer} />
          ) : (
            <></>
          )}
          <Stack.Screen name="Main" component={IndexLoginContainer} />
          <Stack.Screen name="Dashboard" component={DrawerStackContainer} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast ref={ref => Toast.setRef(ref)} />
    </SafeAreaView>
  )
}

export default ApplicationNavigator
