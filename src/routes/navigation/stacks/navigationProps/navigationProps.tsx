import { colors, images } from '../../../../theme'
import { DrawerNavigationOptions } from '@react-navigation/drawer'
import { Text, StyleSheet } from 'react-native'

import SvgImage from '../../../../components/SvgImage';
import HeaderStyle from '../headerComponents/HeaderStyle';


const headerTintColor = 'white'
const fontSize = 18
const headerMode = 'float'

const lightProps: DrawerNavigationOptions = {
  headerTintColor: headerTintColor,
  headerStyle: {

  },
  headerBackground: () => <HeaderStyle />,
  headerRight(props) {
    // console.log(props);
    // console.log('light');

    return (
      <SvgImage style={styles.logo} file={images.logo} width={200} height={70} />
    )
  },
  headerTitleStyle: { fontSize: fontSize },
  headerMode: headerMode,
}

const darkProps: DrawerNavigationOptions = {
  headerTintColor: headerTintColor,
  headerStyle: {
    backgroundColor: colors.dark
  },
  headerRight(props) {
    console.log(props);
    return (
      <Text>dark</Text>
    )
  },
  headerTitleStyle: { fontSize: fontSize },
  headerMode: headerMode
}

export { lightProps, darkProps }

const styles = StyleSheet.create({
  // container: {
  //   paddingTop: 50,
  // },
  // tinyLogo: {
  //   width: 50,
  //   height: 50,
  // },
  logo: {
    // width: 200,
    // height: 70,    
    transform: [{ scaleX: 0.3 }, { scaleY: 0.3 }, { translateX: -200 }, { translateY: 10 }],
    //alignItems: 'stretch'

  },
});