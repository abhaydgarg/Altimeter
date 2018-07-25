import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../Themes';
import styles from './Styles/ScreenActivityIndicatorStyles';

class ScreenActivityIndicator extends Component {
  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
  }

  static defaultProps = {
    size: 'large',
    color: Colors.white
  }

  render () {
    let { size, color } = this.props;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size={size}
          color={color}
        />
      </View>
    );
  }
}

export default ScreenActivityIndicator;
