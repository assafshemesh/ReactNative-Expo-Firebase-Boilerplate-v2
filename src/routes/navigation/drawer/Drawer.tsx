import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import Home from '../../../scenes/home'
import Follower from '../../../scenes/follower'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import StackNavigatorOriginal from '../rootstack/StackNavigatorOriginal'
import Profile from '../../../scenes/profile'
import { ConnectNavigator } from '../stacks/ConnectNavigator'

const Drawer = createDrawerNavigator()

// const DrawerMenuContainer = (props) => {
//   const { state, ...rest } = props
//   const newState = { ...state }
//   newState.routes = newState.routes.filter((item) => item.name !== 'Home')
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerMenu {...props} />
//       <DrawerItemList state={newState} {...rest} />
//     </DrawerContentScrollView>
//   )
// }

const DrawerNavigator = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Connect" component={ConnectNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Original" component={StackNavigatorOriginal} />
    </Drawer.Navigator>
  </GestureHandlerRootView>
)

export default DrawerNavigator;
