import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Services from './screens/Services'
import Ionicons from 'react-native-vector-icons/Ionicons'

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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = focused
                ? require('./assets/icons/active/home.png')
                : require('./assets/icons/notActive/home-gray.png')
            } else if (route.name === 'Profile') {
              iconName = focused
                ? require('./assets/icons/active/myAccount.png')
                : require('./assets/icons/notActive/myAccount-gray.png')
            } else if (route.name === 'Services') {
              iconName = focused
                ? require('./assets/icons/active/services.png')
                : require('./assets/icons/notActive/services-gray.png')
            } else if (route.name === 'Dashboard') {
              iconName = focused
                ? require('./assets/icons/active/dashboard.png')
                : require('./assets/icons/notActive/dashboard-gray.png')
            } else if (route.name === 'Wallet') {
              iconName = focused
                ? require('./assets/icons/active/wallet.png')
                : require('./assets/icons/notActive/wallet-gray.png')
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{ width: 25, height: 25 }} />
          },
        })}
        tabBarOptions={{
          activeTintColor: '#23AA9C',
          inactiveTintColor: '#AFAFAF',
          style: {
            backgroundColor: '#191b1c',
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Services" component={Services} />
        <Tab.Screen name="Wallet" component={Home} />
        <Tab.Screen name="Dashboard" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
