import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/MessageStyles';

class Message extends Component {
  static propTypes = {
    message: PropTypes.string
  }

  static defaultProps = {
    message: 'None'
  }

  render () {
    let { message } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{message}</Text>
      </View>
    );
  }
}

export default Message;
