import React, { Component } from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

// Ignore Yellow warnings
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Remote debugger is in a background',
  'Module RNShakeEvent'
]);

// import stories
configure(() => {
  require('./stories');
}, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({ port: 7007, host: 'localhost', onDeviceUI: false });

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}

AppRegistry.registerComponent('Altimeter', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
