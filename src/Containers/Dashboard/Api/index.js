export const API_URL = 'https://synergylegacynetwork.com/'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}
export const UPLOADHEADERS = {
  'Content-Type': 'multipart/form-data;',
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

export const uploadFile = async (url, fileToUpload) => {
  const accessToken = await AsyncStorage.getItem('accessToken')
  const data = new FormData()
  data.append('file', fileToUpload)
  console.log(API_URL + url)
  return fetch(API_URL + url, {
    headers: { ...UPLOADHEADERS, Authorization: `Bearer ${accessToken}` || '' },
    body: data,
    method: 'POST',
  })
}
