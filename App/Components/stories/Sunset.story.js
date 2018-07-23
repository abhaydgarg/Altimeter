import React from 'react';
import { View } from 'react-native';

import Sunset from '../Sunset';

const SunsetStory = () => {
  return (
    <View style={styles.container}>
      <Sunset
        time={'07:30'}
        calculating={false}
      />
    </View>
  );
};

export default SunsetStory;

const styles = {
  container: {
    height: 100,
    backgroundColor: '#000000'
  }
};
