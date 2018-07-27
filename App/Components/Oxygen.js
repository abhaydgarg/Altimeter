import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Images } from '../Themes';
import styles from './Styles/OxygenStyles';
import { validatePercentage } from './Validators/OxygenValidators';

export default class Oxygen extends Component {
  static propTypes = {
    percentage: PropTypes.number
  };

  static getDerivedStateFromProps (props, state) {
    return {
      percentage: validatePercentage(props.percentage)
    };
  }

  constructor (props) {
    super(props);
    this.state = {
      percentage: 0
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.percentage === nextState.percentage) {
      return false;
    }
    return true;
  }

  formatPercentage = () => {
    if (this.state.percentage) {
      return `${this.state.percentage}%`;
    }
    return this.state.percentage;
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Animatable.Image
            useNativeDriver
            easing='ease-in-out'
            animation='fadeIn'
            style={styles.image}
            resizeMode='contain'
            source={Images.oxygen}
          />
        </View>
        <Animatable.View
          useNativeDriver
          easing='ease-in-out'
          animation='fadeIn'
          style={styles.percentageContainer}
        >
          <Text style={styles.percentage}>{this.formatPercentage()}</Text>
        </Animatable.View>
      </View>
    );
  }
}
