import { StackNavigationOptions } from '@react-navigation/stack'
import { colors } from '../../../../theme'
import { DrawerNavigationOptions } from '@react-navigation/drawer'

const headerTintColor = 'white'
const fontSize = 18
const headerMode = 'float'

const lightProps: DrawerNavigationOptions = {
  headerTintColor: headerTintColor,
  headerStyle: { 
    backgroundColor: colors.darkPurple
  },
  headerTitleStyle: { fontSize: fontSize },
  headerMode: headerMode,
}

const darkProps: DrawerNavigationOptions = {
  headerTintColor: headerTintColor,
  headerStyle: { 
    backgroundColor: colors.dark
  },
  headerTitleStyle: { fontSize: fontSize },
  headerMode: headerMode
}

export { lightProps, darkProps }