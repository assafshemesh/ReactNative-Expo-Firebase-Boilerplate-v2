import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ColorSchemeContext } from '../../../context/ColorSchemeContext'
import HeaderStyle from './headerComponents/HeaderStyle'

import Profile from '../../../scenes/profile'
import Edit from '../../../scenes/edit'

const Stack = createStackNavigator()
const RootStack = createStackNavigator()

export const ProfileNavigator = () => {
  const { scheme } = useContext(ColorSchemeContext)
  return (
    <Stack.Navigator screenOptions={{}}>
      <RootStack.Group>
        <Stack.Screen
          name="Profile"
          component={Profile}
          // options={({ navigation }) => ({
          //   headerBackground: scheme === 'dark' ? null: () => <HeaderStyle />,
          // })}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          // options={({ navigation }) => ({
          //   headerBackground: scheme === 'dark' ? null: () => <HeaderStyle />,
          // })}
        />
      </RootStack.Group>
    </Stack.Navigator>
  )
}