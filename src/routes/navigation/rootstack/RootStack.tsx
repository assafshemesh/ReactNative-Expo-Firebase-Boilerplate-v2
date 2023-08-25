import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import * as Notifications from 'expo-notifications'
import { firestore } from "../../../firebase/config";
import { setDoc, doc } from 'firebase/firestore';
import { UserDataContext } from "../../../context/UserDataContext";
import * as Device from 'expo-device';
import { expoProjectId } from "../../../config";
import Drawer from "../drawer";
import DrawerNavigator from "../drawer/Drawer";

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
  // const isIos = Platform.OS === 'ios'

  useEffect(() => {
    (async () => {
      // https://docs.expo.dev/push-notifications/push-notifications-setup/
      const isDevice = Device.isDevice
      if(!isDevice) return
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

  return (    
    <DrawerNavigator />        
  )
}


