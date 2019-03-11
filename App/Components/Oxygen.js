import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Images } from '../Themes';
import styles from './Styles/OxygenStyles';
import { validatePercentage } from './Validators/OxygenValidators';

export default class Oxygen extends Component {
  static propTypes = {
    percentage: PropTypes.number,
    receiving: PropTypes.bool
  };

  static getDerivedStateFromProps (props, state) {
    return {
      percentage: validatePercentage(props.percentage),
      receiving: props.receiving
    };
  }

  constructor (props) {
    super(props);
    this.state = {
      percentage: 0,
      receiving: false
    };
  }

  formatPercentage = () => {
    if (this.state.percentage) {
      return `${this.state.percentage}%`;
    }
    return this.state.percentage;
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
            source={Images.oxygen}
          />
        </View>
        <Animatable.View
          useNativeDriver
          easing='ease-in-out'
          animation={this.state.receiving ? undefined : 'fadeIn'}
          style={styles.percentageContainer}
        >
          <Text style={styles.percentage}>{this.formatPercentage()}</Text>
        </Animatable.View>
      </Animatable.View>
    );
  }
}
