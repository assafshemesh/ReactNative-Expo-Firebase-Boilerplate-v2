import React from "react";
import { Platform } from "react-native";
import { TransitionPresets } from '@react-navigation/stack';
import TabNavigator from "../tabs/Tabs";
import { ModalStacks } from "../stacks/ModalStacks/ModalStacks";
import { Stack } from "./RootStack";

function StackNavigatorOriginal() {
  const isIos = Platform.OS === 'ios';

  return <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen
      name='HomeRoot'
      component={TabNavigator} />
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
        name='ModalStacks'
        component={ModalStacks} />
    </Stack.Group>
  </Stack.Navigator>;
}

export default StackNavigatorOriginal;