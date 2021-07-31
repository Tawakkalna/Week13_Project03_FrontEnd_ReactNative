import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from './Main'

const Tab = createBottomTabNavigator()
export default function App() {
  const [loading, setLoading] = useState(() => true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#121212',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#23AA9C" />
      </View>
    )
  }
  return (
    <Main></Main>
  )
}
