import React, { useContext, useState } from 'react'
import {
  createDrawerNavigator,
} from '@react-navigation/drawer'
import Home from '../../../scenes/home'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Profile from '../../../scenes/profile'
import StringsOfLanguages from '../../../utils/localization'
import { HomeTitleContext } from '../../../context/HomeTitleContext'
import { ColorSchemeContext } from '../../../context/ColorSchemeContext'
import { darkProps, lightProps } from '../stacks/navigationProps/navigationProps'
import { FollowFollowerNavigator } from '../toptabs/followfollowerNavigator'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [title, setTitle] = useState('default title');
  const { scheme } = useContext(ColorSchemeContext);

  const navigationProps = scheme === 'dark' ? darkProps:lightProps

  return (
    <HomeTitleContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      <HomeTitleContext.Consumer>
        {(ctx) => (
          <GestureHandlerRootView style={{ flex: 1 }} >
            <Drawer.Navigator initialRouteName="Home"
            screenOptions={navigationProps}          

            // screenOptions={{
            //   headerRight: LanguageSelector(),
            // }}
            >
              <Drawer.Screen name={StringsOfLanguages.t("home")} component={Home} />
              <Drawer.Screen name="Connect" component={FollowFollowerNavigator} />
              <Drawer.Screen name="Profile" component={Profile} />
              {/* <Drawer.Screen name="Original" component={StackNavigatorOriginal} /> */}
             
            </Drawer.Navigator>
          </GestureHandlerRootView>
        )}
      </HomeTitleContext.Consumer>
    </HomeTitleContext.Provider>
  )
}

export default DrawerNavigator;

// function LanguageSelector(): (props: { tintColor?: string; pressColor?: string; pressOpacity?: number }) => React.ReactNode {
//   return () => (

//     <View style={{ flexDirection: 'row' }}>
//       <Button
//         //icon="flag-usa"
//         title='en'
//         color={colors.lightPurple}
//         //size={24}
//         onPress={() => { setLanguage('en', false) }}

//       //containerStyle={{ paddingRight: 15 }} 
//       />

//       <Button
//         //icon="star-of-david"
//         title='he'
//         color={colors.lightPurple}
//         //size={24}
//         onPress={() => { setLanguage('he', true) }}
//       //containerStyle={{ paddingRight: 15 }} 
//       /></View>
//   )
// }

