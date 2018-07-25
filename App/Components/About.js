import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import ScreenMessage from './Global/ScreenMessage';
import { Images } from '../Themes';
import styles from './Styles/AboutStyles';

export default class About extends Component {
  render () {
    return (
      <ScreenMessage>
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={Images.logo}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{DeviceInfo.getApplicationName()}</Text>
            <Text style={styles.version}>{DeviceInfo.getVersion()}</Text>
            <Text style={styles.build}>-{DeviceInfo.getBuildNumber()}</Text>
          </View>
          <View>
            {(__DEV__) ? <Text style={styles.dev}>DEV ENV ({DeviceInfo.getBundleId()})</Text> : null}
          </View>
        </View>
      </ScreenMessage>
    );
  }
}
