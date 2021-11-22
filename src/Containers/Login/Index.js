import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, ScrollView } from 'react-native'
import { Button, Input } from '@/Components'
import { useTheme } from '@/Theme'
import Toast from 'react-native-toast-message'
import Login from '@/Store/User/Login'
import AsyncStorage from '@react-native-async-storage/async-storage'

const IndexLoginContainer = ({ navigation }) => {
  const { Layout } = useTheme()
  const [username, setUsername] = useState('partners@legacynetwork.com')
  const [password, setPassword] = useState('bld')
  const [isLoading, setLoading] = useState(false)
  const [loginLabel, setLoginLabel] = useState('Login')
  const dispatch = useDispatch()
  // const user = useSelector(state => state.user.item)
  const fetchOneUserLoading = useSelector(state => state.user.login.loading)
  // const fetchOneUserError = useSelector(state => state.user.login.error)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getData()
  }, [getData])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('accessToken')
      if (value !== null) {
        // value previously stored
        navigation.navigate('Dashboard')
      }
    } catch (e) {
      // error reading value
    }
  }

  const onLogin = async () => {
    let that = this
    setLoading(true)
    setLoginLabel('Loading...')
    const args = {
      username,
      password,
      callback: function (result) {
        if (result.status === 200) {
          // navigate
          Toast.show({
            position: 'bottom',
            type: 'success',
            text1: 'Login successfully',
          })
          // navigation.navigate('Main')
          navigation.navigate('Dashboard')
        } else if (result.status === 401) {
          // toast
          Toast.show({
            position: 'bottom',
            type: 'error',
            text1: result.data.message,
          })
        } else {
          // toast
          Toast.show({
            position: 'bottom',
            type: 'error',
            text1: result.data.message,
          })
        }
        setLoading(false)
        setLoginLabel('Login')
      },
    }

    dispatch(Login.action(args))
  }

  return (
    <ScrollView
      style={{ paddingTop: 150 }}
      contentContainerStyle={{ padding: 16 }}
    >
      <View style={Layout.compName}>
        <Text style={Layout.legacy}>legacy</Text>
        <Text style={Layout.network}>network</Text>
      </View>

      <Input
        placeholder="Username"
        value={username}
        editable={!isLoading}
        textStyle={{ color: !isLoading ? 'black' : 'gray' }}
        containerStyle={{ marginBottom: 15 }}
        onChangeText={username => setUsername(username)}
        keyboardType="email-address"
      />

      <Input
        placeholder="Password"
        value={password}
        secureText={true}
        editable={!isLoading}
        textStyle={{ color: !isLoading ? 'black' : 'gray' }}
        onChangeText={password => setPassword(password)}
        containerStyle={{ marginBottom: 15 }}
      />

      <Button
        disabled={fetchOneUserLoading}
        type="info"
        textColor="white"
        text={loginLabel}
        textStyle={{ color: !isLoading ? 'white' : 'lightgray' }}
        onPress={() => onLogin()}
      />
    </ScrollView>
  )
}

export default IndexLoginContainer
