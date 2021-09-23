import api, { handleError } from '@/Services'
import { Config } from '@/Config'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '@/Config'
import { postCall, getCall } from '../Api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const getUser = async () => {
  let userReq = await getCall('api/user', {})
  userReq = await userReq.json()
  return userReq
}

export default async params => {
  if (!params.username || !params.password) {
    return handleError({ message: 'Username and Password is required' })
  }

  const parameters = {
    ...Config.OAUTH,
    username: params.username,
    password: params.password,
  }
  // console.log(parameters)
  let result = null
  try {
    let response = await postCall('oauth/token', parameters)
    result = await response.json()
    if (response.status === 200) {
      const payload = {
        refreshToken: result.refresh_token,
        expiration: result.expires_in,
        accessToken: result.access_token,
      }

      // get the user profile
      await AsyncStorage.setItem('accessToken', payload.accessToken)
      let user = await getUser()
      // console.log('response user', user.data)

      await AsyncStorage.setItem('profileInfo', JSON.stringify(user.data))
      // console.log(JSON.stringify(user.data))
      // return await user.data.json()
      result = user.data
    }
    result = { data: result, status: response.status }
  } catch (error) {
    result = { data: { message: 'Network Connection Failed' }, status: 500 }
  }
  params.callback(result)
  return result
  // console.log(result)
  // const data = await api.post('oauth/token', parameters)
  // console.log(data)
  // return {}
}
