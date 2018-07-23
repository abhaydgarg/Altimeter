import React, { Component } from 'react';
import { View } from 'react-native';

import PrimaryNavigation from '../Navigation/PrimaryNavigation';
import styles from './Styles/RootContainerStyles';

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
