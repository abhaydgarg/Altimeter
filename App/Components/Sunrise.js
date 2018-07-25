import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { isEmpty } from '@abhaydgarg/is';

import { Images } from '../Themes';
import styles from './Styles/SunriseStyles';

export default class Sunrise extends Component {
  static propTypes = {
    time: PropTypes.string.isRequired,
    calculating: PropTypes.bool
  };

  static defaultProps = {
    calculating: false
  }

  validateTime = () => {
    if (isEmpty(this.props.time)) {
      return '0:00';
    }
    return this.props.time;
  }

  iterationCount = () => {
    if (this.props.calculating === true) {
      return 'infinite';
    }
    return 1;
  }

  animation = () => {
    if (this.props.calculating === true) {
      return 'swing';
    }
    return 'fadeIn';
  }

  render () {
    let { time } = this.props;
    time = this.validateTime();

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Animatable.Image
            useNativeDriver
            easing='ease-in-out'
            animation={this.animation()}
            iterationCount={this.iterationCount()}
            style={styles.image}
            resizeMode='contain'
            source={Images.sunrise}
          />
        </View>
        <View style={styles.timeContainer}>
          <Animatable.Text
            easing='ease-in-out'
            animation='fadeIn'
            style={styles.time}
          >
            {time}
          </Animatable.Text>
        </View>
      </View>
    );
  }
}
