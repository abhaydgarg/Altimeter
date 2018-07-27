import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
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
    level: PropTypes.string
  };

  static getDerivedStateFromProps (props, state) {
    return {
      altitude: validateAltitude(props.altitude),
      accuracy: validateAccuracy(props.accuracy),
      level: validateLevel(props.level)
    };
  }

  constructor (props) {
    super(props);
    this.state = {
      altitude: 0,
      accuracy: 0,
      level: ''
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.altitude === nextState.altitude) {
      return false;
    }
    return true;
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

  render () {
    return (
      <View style={styles.container}>
        <Text style={[styles.level, { backgroundColor: this.setLevelBackgroundColor() }]}>
          {this.state.level}
        </Text>
        <Animatable.View
          useNativeDriver
          animation='zoomIn'
          easing='ease-in-out'
          style={styles.body}
        >
          <Text style={styles.altitude}>{this.state.altitude}</Text>
          <Text style={styles.altitudeUnit}>Meter</Text>
        </Animatable.View>
        <View style={styles.footer}>
          <Animatable.View
            useNativeDriver
            animation='fadeIn'
            easing='ease-in-out'
            style={styles.accuracyContainer}
          >
            <Text style={styles.accuracyText}>Accuracy:</Text>
            <Text style={styles.accuracy}>{this.state.accuracy}</Text>
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation='fadeIn'
            easing='ease-in-out'
            style={styles.feetContainer}
          >
            <Text style={styles.feet}>{this.convertAltitude()}</Text>
            <Text style={styles.feetUnit}>ft</Text>
          </Animatable.View>
        </View>
      </View>
    );
  }
}
