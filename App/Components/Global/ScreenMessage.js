import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

import styles from './Styles/ScreenMessageStyles';

class ScreenMessage extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    let { children } = this.props;
    return (
      <View style={styles.container}>
        <Animatable.View
          useNativeDriver
          animation='pulse'
          easing='ease-in-out'
        >
          {children}
        </Animatable.View>
      </View>
    );
  }
}

export default ScreenMessage;
