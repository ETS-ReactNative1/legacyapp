import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTheme } from '@/Theme'
import InitStartup from '@/Store/Startup/Init'
import { Brand } from '@/Components'

const IndexStartupContainer = () => {
  const { Layout } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <View style={{ flex: 1 }}>
      <Brand />
    </View>
  )
}

export default IndexStartupContainer
