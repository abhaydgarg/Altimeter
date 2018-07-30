import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Images } from '../Themes';
import styles from './Styles/SunsetStyles';
import { validateTime } from './Validators/SunsetValidators';

export default class Sunset extends Component {
  static propTypes = {
    time: PropTypes.string.isRequired,
    receiving: PropTypes.bool
  };

  static getDerivedStateFromProps (props, state) {
    return {
      time: validateTime(props.time),
      receiving: props.receiving
    };
  }

  constructor (props) {
    super(props);
    this.state = {
      time: '0:00',
      receiving: false
    };
  }

  render () {
    return (
      <Animatable.View
        useNativeDriver
        animation='fadeIn'
        easing='ease-in-out'
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <Animatable.Image
            useNativeDriver
            easing='ease-in-out'
            animation={this.state.receiving ? 'swing' : 'fadeIn'}
            iterationCount={this.state.receiving ? 'infinite' : 1}
            style={styles.image}
            resizeMode='contain'
            source={Images.sunset}
          />
        </View>
        <View style={styles.timeContainer}>
          <Animatable.Text
            easing='ease-in-out'
            animation={this.state.receiving ? undefined : 'fadeIn'}
            style={styles.time}
          >
            {this.state.time}
          </Animatable.Text>
        </View>
      </Animatable.View>
    );
  }
}
