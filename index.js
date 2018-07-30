/** @format */
import { AppRegistry, YellowBox } from 'react-native';
import App from './App/Containers/App';
import { name as appName } from './app.json';

// Ignore Yellow warnings
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Remote debugger is in a background',
  'Module RNShakeEvent',
  'Module RNShare',
  'Class',
  'Required dispatch_sync'
]);

AppRegistry.registerComponent(appName, () => App);
