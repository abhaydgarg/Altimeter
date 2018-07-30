import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ActivityIndicator } from 'react-native';
import formatNumber from 'simple-format-number';
import * as Animatable from 'react-native-animatable';

import Util from '../Lib/Util';
import { Colors } from '../Themes';
import styles from './Styles/AltitudeStyles';
import { validateAltitude, validateAccuracy, validateLevel } from './Validators/AltitudeValidators';

export default class Altitude extends Component {
  static propTypes = {
    altitude: PropTypes.number.isRequired,
    accuracy: PropTypes.number,
    level: PropTypes.string,
    receiving: PropTypes.bool,
    refreshing: PropTypes.bool
  };

  static getDerivedStateFromProps (props, state) {
    return {
      altitude: validateAltitude(props.altitude),
      accuracy: validateAccuracy(props.accuracy),
      level: validateLevel(props.level),
      receiving: props.receiving,
      refreshing: props.refreshing
    };
  }

  constructor (props) {
    super(props);
    this.state = {
      altitude: 0,
      accuracy: 0,
      level: '',
      receiving: false,
      refreshing: false
    };
  }

  convertAltitude = () => {
    return formatNumber(this.state.altitude * 3.28, {
      fractionDigits: 0
    });
  }

  setLevelBackgroundColor = () => {
    let color = Util.getAltitudeLevelColorIdentifier(this.state.level);
    if (color) {
      return Colors.altitudeLevel[color];
    }
    return Colors.transparent;
  }

  renderAltitude = () => {
    if (this.state.receiving === true && this.state.refreshing === false) {
      return (
        <ActivityIndicator
          size='small'
          color={Colors.white}
          style={styles.activityIndicator}
        />
      );
    }
    return (
      <Animatable.Text
        easing='ease-in-out'
        animation={this.state.receiving ? undefined : 'fadeIn'}
        style={styles.altitude}
      >
        {this.state.altitude}
      </Animatable.Text>
    );
  }

  render () {
    return (
      <Animatable.View
        useNativeDriver
        animation='fadeIn'
        easing='ease-in-out'
        style={styles.container}
      >
        <Animatable.Text
          easing='ease-in-out'
          animation={this.state.receiving ? undefined : 'fadeIn'}
          style={[styles.level, { backgroundColor: this.setLevelBackgroundColor() }]}
        >
          {this.state.level}
        </Animatable.Text>
        <View style={styles.body}>
          {this.renderAltitude()}
          <Text style={styles.altitudeUnit}>Meter</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.accuracyContainer}>
            <Text style={styles.accuracyText}>Accuracy:</Text>
            <Animatable.Text
              easing='ease-in-out'
              animation={this.state.receiving ? undefined : 'fadeIn'}
              style={styles.accuracy}
            >
              {this.state.accuracy}
            </Animatable.Text>
          </View>
          <View style={styles.feetContainer}>
            <Animatable.Text
              easing='ease-in-out'
              animation={this.state.receiving ? undefined : 'fadeIn'}
              style={styles.feet}
            >
              {this.convertAltitude()}
            </Animatable.Text>
            <Text style={styles.feetUnit}>ft</Text>
          </View>
        </View>
      </Animatable.View>
    );
  }
}
