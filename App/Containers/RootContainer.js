import React, { Component } from 'react';
import { View } from 'react-native';
import { MessageBar } from 'react-native-messages';

import styles from './Styles/RootContainerStyles';
import Message from '../Components/Global/Message';
import PrimaryNavigation from '../Navigation/PrimaryNavigation';

class RootContainer extends Component {
  render () {
    return (
      <View style={styles.container}>
        <PrimaryNavigation />
        <MessageBar messageComponent={Message} />
      </View>
    );
  }
}

export default RootContainer;
