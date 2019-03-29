import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './Styles/RootContainerStyles';
import PrimaryNavigation from '../Navigation/PrimaryNavigation';

class RootContainer extends Component {
  render () {
    return (
      <View style={styles.container}>
        <PrimaryNavigation />
      </View>
    );
  }
}

export default RootContainer;
