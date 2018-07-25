import React from 'react';
import { View } from 'react-native';

import ScreenActivityIndicator from '../ScreenActivityIndicator';

const ScreenActivityIndicatorStory = () => {
  return (
    <View style={styles.container}>
      <ScreenActivityIndicator />
    </View>
  );
};

export default ScreenActivityIndicatorStory;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
};
