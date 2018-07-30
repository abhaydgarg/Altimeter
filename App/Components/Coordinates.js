import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import openMap from 'react-native-open-maps';
import { AppInstalledChecker } from 'react-native-check-app-install';

import Util from '../Lib/Util';
import styles from './Styles/CoordinatesStyles';
import { validateLat, validateLon, validateLocation } from './Validators/CoordinatesValidators';

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

export default class Coordinates extends Component {
  static propTypes = {
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    location: PropTypes.string,
    fetching: PropTypes.bool,
    receiving: PropTypes.bool
  };

  static getDerivedStateFromProps (props, state) {
    return {
      lat: validateLat(props.lat),
      lon: validateLon(props.lon),
      location: validateLocation(props.location),
      fetching: props.fetching,
      receiving: props.receiving
    };
  }

  constructor (props) {
    super(props);
    this.state = {
      lat: 0,
      lon: 0,
      location: '',
      fetching: false,
      receiving: false
    };
  }

  openMap = () => {
    if (this.state.lat !== 0 && this.state.lon !== 0) {
      AppInstalledChecker.isAppInstalled('google maps').then(isInstalled => {
        let provider = 'google';
        if (isInstalled === false && Platform.OS === 'ios') {
          provider = 'apple';
        }
        return provider;
      }).then(provider => {
        openMap({
          provider: provider,
          latitude: this.state.lat,
          longitude: this.state.lon
        });
      }).catch(error => {
        Util.handleOpenMapError(error);
      });
    }
  }

  render () {
    return (
      <Animatable.View
        useNativeDriver
        animation='fadeIn'
        easing='ease-in-out'
        style={styles.container}
      >
        <View style={styles.iconContainer}>
          <AnimatedIcon
            easing='ease-in-out'
            animation={this.state.fetching ? 'rotate' : 'fadeIn'}
            iterationCount={this.state.fetching ? 'infinite' : 1}
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
            animation={this.state.receiving ? undefined : 'fadeIn'}
            easing='ease-in-out'
            style={styles.latLonContainer}
          >
            <Text style={styles.lat}>{this.state.lat}</Text>
            <Text style={styles.separator}>/</Text>
            <Text style={styles.lon}>{this.state.lon}</Text>
          </Animatable.View>
        </TouchableOpacity>
        <View
          style={styles.locationContainer}
        >
          <Animatable.Text
            animation={this.state.fetching ? undefined : 'fadeIn'}
            easing='ease-in-out'
            style={styles.location}
          >
            {this.state.location}
          </Animatable.Text>
        </View>
      </Animatable.View>
    );
  }
}
