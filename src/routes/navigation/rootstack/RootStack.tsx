import React, { useState, useContext, useEffect } from "react";
import { Platform, View } from "react-native";
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import * as Notifications from 'expo-notifications'
import { firestore } from "../../../firebase/config";
import { setDoc, doc } from 'firebase/firestore';
import { UserDataContext } from "../../../context/UserDataContext";
import * as Device from 'expo-device';
import { expoProjectId } from "../../../config";

import DrawerNavigator from "../drawer/Drawer";
import { ModalStacks } from "../stacks/ModalStacks/ModalStacks";
import StringsOfLanguages from "../../../utils/localization";
import Detail from "../../../scenes/detail";
import { HomeTitleContext } from "../../../context/HomeTitleContext";
import HeaderStyle from "../stacks/headerComponents/HeaderStyle";
import { ColorSchemeContext } from "../../../context/ColorSchemeContext";
import Edit from "../../../scenes/edit";


export const Stack = createStackNavigator()

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function RootStack() {
  const { userData } = useContext(UserDataContext)
  const isIos = Platform.OS === 'ios';
  const { scheme } = useContext(ColorSchemeContext);
  const [title, setTitle] = useState('default title');

  useEffect(() => {
    (async () => {
      // https://docs.expo.dev/push-notifications/push-notifications-setup/
      const isDevice = Device.isDevice
      if (!isDevice) return
      console.log('get push token')
      const { status: existingStatus } = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync({
        projectId: expoProjectId
      });
      const tokensRef = doc(firestore, 'tokens', userData.id);
      await setDoc(tokensRef, {
        token: token.data,
        id: userData.id
      })
    })();
  }, [userData])

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification.request.content)
    });
    return () => subscription.remove();
  }, []);

  return <HomeTitleContext.Provider
    value={{
      title,
      setTitle,
    }}
  >
    <HomeTitleContext.Consumer>
      {(ctx) => (

        <Stack.Navigator
          screenOptions={{
            // headerShown: false
            headerBackground: scheme === 'dark' ? null : () => <HeaderStyle />,
            headerTintColor: 'white',
          }}
        >
          {/* <Stack.Screen
      name='HomeRoot'
      component={TabNavigator} /> */}
          <Stack.Group
            screenOptions={{
              presentation: 'modal',
              headerShown: false,
              // gestureEnabled: true,
              cardOverlayEnabled: true,
              ...TransitionPresets.ModalPresentationIOS,
              gestureEnabled: isIos
            }}
          >
            <Stack.Screen
              name="Main"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='ModalStacks'
              component={ModalStacks}
            />

          </Stack.Group>

          <Stack.Screen
            name={StringsOfLanguages.t("Detail")} component={Detail}
            options={{
              title: ctx.title
            }}
          />

          <Stack.Screen
            name="Edit"
            component={Edit}
            options={{
              title: ctx.title
            }}
          />

        </Stack.Navigator>
      )}
    </HomeTitleContext.Consumer>
  </HomeTitleContext.Provider>
    ;
}



