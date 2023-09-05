import { Asset } from 'expo-asset'

// svg
// import Logo from '../../assets/images/xapp-logo.svg';

// export const svgs = {
//   logo: require('../../assets/images/xapp-logo.svg'),
// }

// png/jpeg
export const images = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),

  logo: require('../../assets/images/xapp-logo.svg'),
  login_bg: require('../../assets/images/login-bg.jpg'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())
