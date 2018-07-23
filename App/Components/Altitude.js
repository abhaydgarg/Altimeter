import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import formatNumber from 'simple-format-number';
import * as Animatable from 'react-native-animatable';
import { isNumber, isEmpty } from '@abhaydgarg/is';

import Util from '../Lib/Util';
import { Colors } from '../Themes';
import styles from './Styles/AltitudeStyles';

export default class Altitude extends Component {
  static propTypes = {
    altitude: PropTypes.number.isRequired,
    accuracy: PropTypes.number,
    level: PropTypes.string
  };

  static defaultProps = {
    accuracy: 0,
    level: null
  }

  convertAltitude = (altitude) => {
    altitude = altitude * 3.28;
    return formatNumber(altitude, {
      fractionDigits: 0
    });
  }

  validateAccuracy = () => {
    if (!isNumber(this.props.accuracy)) {
      return 0;
    }
    return this.props.accuracy;
  }

  validateAltitude = () => {
    if (!isNumber(this.props.altitude)) {
      return 0;
    }
    return this.props.altitude;
  }

  setLevelBackgroundColor = () => {
    let color = Util.getAltitudeLevelColor(this.props.level);
    if (!isEmpty(color)) {
      return Colors.altitudeLevel[color];
    }
    return Colors.white;
  }

  renderLevel = () => {
    let { level } = this.props;
    if (!isEmpty(level)) {
      return (
        <Text style={[styles.level, { backgroundColor: this.setLevelBackgroundColor() }]}>{level}</Text>
      );
    }
    return null;
  }

  render () {
    let { accuracy, altitude } = this.props;
    accuracy = this.validateAccuracy();
    altitude = this.validateAltitude();

    return (
      <View style={styles.container}>
        {this.renderLevel()}
        <Animatable.View
          useNativeDriver
          animation='zoomIn'
          easing='ease-in-out'
          style={styles.body}
        >
          <Text style={styles.altitude}>{altitude}</Text>
          <Text style={styles.altitudeUnit}>Metres</Text>
        </Animatable.View>
        <View style={styles.footer}>
          <Animatable.View
            useNativeDriver
            animation='fadeIn'
            easing='ease-in-out'
            style={styles.accuracyContainer}
          >
            <Text style={styles.accuracyText}>Accuracy:</Text>
            <Text style={styles.accuracy}>{accuracy}</Text>
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation='fadeIn'
            easing='ease-in-out'
            style={styles.feetContainer}
          >
            <Text style={styles.feet}>{this.convertAltitude(altitude)}</Text>
            <Text style={styles.feetUnit}>ft</Text>
          </Animatable.View>
        </View>
      </View>
    );
  }
}
