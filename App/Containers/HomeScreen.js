import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Styles/HomeScreenStyles';
import { Colors } from '../Themes';

export default class HomeScreen extends Component {
  constructor (props) {
    super(props);
    StatusBar.setBarStyle('light-content', true);
  }

  render () {
    return (
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        <Text style={{ color: 'white' }}>Home Screen</Text>
      </LinearGradient>
    );
  }
}
