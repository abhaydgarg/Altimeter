import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { isFunction } from '@abhaydgarg/is';

import ScreenMessage from './Global/ScreenMessage';
import styles from './Styles/LocationPermissionStyles';

export default class LocationPermission extends Component {
  static propTypes = {
    handleLocationPermission: PropTypes.func.isRequired
  };

  onPress = () => {
    if (isFunction(this.props.handleLocationPermission)) {
      this.props.handleLocationPermission();
    }
  }

  render () {
    return (
      <ScreenMessage>
        <View style={styles.container}>
          <Icon
            name='ios-navigate'
            style={styles.icon}
          />
          <Text style={styles.description}>Altimeter needs to access device's location.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}
            >
              <Text style={styles.text}>Enable access</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScreenMessage>
    );
  }
}
