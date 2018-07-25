import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { isNumber } from '@abhaydgarg/is';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './Styles/CoordinatesStyles';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

export default class Coordinates extends Component {
  static propTypes = {
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    location: PropTypes.string,
    fetching: PropTypes.bool
  };

  static defaultProps = {
    location: 'Unknown'
  }

  validateLat = () => {
    if (!isNumber(this.props.lat)) {
      return 0;
    }
    return this.props.lat;
  }

  validateLon = () => {
    if (!isNumber(this.props.lon)) {
      return 0;
    }
    return this.props.lon;
  }

  iterationCount = () => {
    if (this.props.fetching === true) {
      return 'infinite';
    }
    return 1;
  }

  animation = () => {
    if (this.props.fetching === true) {
      return 'rotate';
    }
    return 'fadeIn';
  }

  render () {
    let { lat, lon, location } = this.props;
    lat = this.validateLat();
    lon = this.validateLon();

    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <AnimatedIcon
            easing='ease-in-out'
            animation={this.animation()}
            iterationCount={this.iterationCount()}
            name='ios-locate-outline'
            style={styles.icon}
          />
        </View>
        <Animatable.View
          useNativeDriver
          animation='fadeIn'
          easing='ease-in-out'
          style={styles.latLonContainer}
        >
          <Text style={styles.lat}>{lat}</Text>
          <Text style={styles.separator}>/</Text>
          <Text style={styles.lon}>{lon}</Text>
        </Animatable.View>
        <Animatable.View
          useNativeDriver
          animation='fadeIn'
          easing='ease-in-out'
          style={styles.locationContainer}
        >
          <Text
            numberOfLines={2}
            style={styles.location}
          >
            {location}
          </Text>
        </Animatable.View>
      </View>
    );
  }
}
