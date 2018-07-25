import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');

const metrics = {
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallPadding: 5,
  basePadding: 10,
  doubleBasePadding: 20,
  screenPaddingBottom: DeviceInfo.getModel() === 'iPhone X' ? 20 : 0,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusBarHeight: getStatusBarHeight(),
  images: {
    small: 20,
    medium: 40,
    large: 60
  }
};

export default metrics;
