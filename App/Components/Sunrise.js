import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Images } from '../Themes';
import styles from './Styles/SunriseStyles';
import { validateTime } from './Validators/SunriseValidators';

export default class Sunrise extends Component {
  static propTypes = {
    time: PropTypes.string.isRequired,
    calculating: PropTypes.bool
  };

  static getDerivedStateFromProps (props, state) {
    return {
      time: validateTime(props.time),
      calculating: props.calculating
    };
  }

  constructor (props) {
    super(props);
    this.state = {
      time: '0:00',
      calculating: false
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.time === nextState.time) {
      return false;
    }
    return true;
  }

  iterationCount = () => {
    if (this.state.calculating === true) {
      return 'infinite';
    }
    return 1;
  }

  animation = () => {
    if (this.state.calculating === true) {
      return 'swing';
    }
    return 'fadeIn';
  }

  render () {
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
            {this.state.time}
          </Animatable.Text>
        </View>
      </View>
    );
  }
}
