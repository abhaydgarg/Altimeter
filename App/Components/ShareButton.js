import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import { isFunction } from '@abhaydgarg/is';

import styles from './Styles/ShareButtonStyles';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

export default class ShareButton extends Component {
  static propTypes = {
    handleShare: PropTypes.func.isRequired
  };

  onPress = () => {
    if (isFunction(this.props.handleShare)) {
      this.props.handleShare();
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={this.onPress}
        >
          <View style={styles.iconInnerContainer}>
            <AnimatedIcon
              easing='ease-in-out'
              animation='tada'
              name='ios-share-alt'
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
