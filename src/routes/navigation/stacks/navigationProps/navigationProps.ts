import { StackNavigationOptions } from '@react-navigation/stack'
import { colors } from '../../../../theme'

const headerTintColor = 'white'
const fontSize = 18
const headerMode = 'float'

const lightProps: StackNavigationOptions = {
  headerTintColor: headerTintColor,
  headerStyle: { 
    backgroundColor: colors.darkPurple
  },
  headerTitleStyle: { fontSize: fontSize },
  headerMode: headerMode
}

const darkProps: StackNavigationOptions = {
  headerTintColor: headerTintColor,
  headerStyle: { 
    backgroundColor: colors.dark
  },
  headerTitleStyle: { fontSize: fontSize },
  headerMode: headerMode
}

export { lightProps, darkProps }