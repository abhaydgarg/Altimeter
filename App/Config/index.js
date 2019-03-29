import Toast from 'react-native-root-toast';
import { Colors } from '../Themes';

const Config = {
  locationOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 30000
  },
  locationiq: {
    key: 'pk.023d5db425d8a45a42cd83361e29037d',
    format: 'json',
    endpoints: {
      reverse: 'https://us1.locationiq.org/v1/reverse.php' // ?key=YOUR_PRIVATE_TOKEN&lat=LATITUDE&lon=LONGITUDE&format=json
    }
  },
  toast: {
    duration: Toast.durations.LONG + 1500,
    position: Toast.positions.TOP + 30,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    opacity: 1,
    backgroundColor: Colors.white,
    textColor: Colors.black
  }
};

export default Config;
