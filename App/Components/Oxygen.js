import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { isEmpty } from '@abhaydgarg/is';

import { Images } from '../Themes';
import styles from './Styles/OxygenStyles';

export default class Oxygen extends Component {
  static propTypes = {
    percentage: PropTypes.number
  };

  static defaultProps = {
    percentage: null
  }

  formatPercentage = () => {
    if (!isEmpty(this.props.percentage)) {
      return `${this.props.percentage}%`;
    }
    return this.props.percentage;
  }

  render () {
    let { percentage } = this.props;
    percentage = this.formatPercentage();

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
          <Text style={styles.percentage}>{percentage}</Text>
        </Animatable.View>
      </View>
    );
  }
}
