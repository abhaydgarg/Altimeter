import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import openMap from 'react-native-open-maps';

import styles from './Styles/CoordinatesStyles';
import { validateLat, validateLon, validateLocation } from './Validators/CoordinatesValidators';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

export default class Coordinates extends Component {
  static propTypes = {
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    location: PropTypes.string,
    fetching: PropTypes.bool
  };

  static getDerivedStateFromProps (props, state) {
    return {
      lat: validateLat(props.lat),
      lon: validateLon(props.lon),
      location: validateLocation(props.location),
      fetching: props.fetching
    };
  }

  constructor (props) {
    super(props);
    this.state = {
      lat: 0,
      lon: 0,
      location: 'Unknown',
      fetching: false
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.lat === nextState.lat && this.state.lon === nextState.lon) {
      return false;
    }
    return true;
  }

  openMap = () => {
    if (this.state.lat !== 0 && this.state.lon !== 0) {
      openMap({
        latitude: this.state.lat,
        longitude: this.state.lon
      });
    }
  }

  iterationCount = () => {
    if (this.state.fetching === true) {
      return 'infinite';
    }
    return 1;
  }

  animation = () => {
    if (this.state.fetching === true) {
      return 'rotate';
    }
    return 'fadeIn';
  }

  render () {
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
        <TouchableOpacity
          style={styles.latLonMainContainer}
          onPress={this.openMap}
        >
          <Animatable.View
            useNativeDriver
            animation='fadeIn'
            easing='ease-in-out'
            style={styles.latLonContainer}
          >
            <Text style={styles.lat}>{this.state.lat}</Text>
            <Text style={styles.separator}>/</Text>
            <Text style={styles.lon}>{this.state.lon}</Text>
          </Animatable.View>
        </TouchableOpacity>
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
            {this.state.location}
          </Text>
        </Animatable.View>
      </View>
    );
  }
}
