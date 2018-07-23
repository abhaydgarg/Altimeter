import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');

const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  paddingHorizontal: 10,
  paddingVertical: 10,
  basePadding: 10,
  doubleBasePadding: 20,
  smallPadding: 5,
  screenPaddingBottom: DeviceInfo.getModel() === 'iPhone X' ? 20 : 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusBarHeight: getStatusBarHeight(),
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
};

export default metrics;
