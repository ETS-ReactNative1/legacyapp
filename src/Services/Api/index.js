export const API_URL = 'https://synergylegacynetwork.com/'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const OAUTH = {
  grant_type: 'password',
  client_id: 3,
  // client_secret: 'iWAFMthzblxbArUWKMirWgZLt1o5dgQDKVZwnbMG',
  client_secret: 'iWAFMthzblxbArUWKMirWgZLt1o5dgQDKVZwnbMG',
}

export const postCall = async (url, data) => {
  const accessToken = await AsyncStorage.getItem('accessToken')
  console.log(API_URL + url, {
    headers: { ...HEADERS, Authorization: `Bearer ${accessToken}` || '' },
    method: 'POST',
    body: JSON.stringify(data),
  })
  return fetch(API_URL + url, {
    headers: { ...HEADERS, Authorization: `Bearer ${accessToken}` || '' },
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const getCall = async (url, data) => {
  const accessToken = await AsyncStorage.getItem('accessToken')
  // console.log(API_URL + url, { headers: {...HEADERS, Authorization: `Bearer ${accessToken}` || ''}, method: 'GET'});
  return fetch(API_URL + url, {
    headers: { ...HEADERS, Authorization: `Bearer ${accessToken}` || '' },
    method: 'GET',
  })
}
