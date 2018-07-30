import React from 'react';
import { View } from 'react-native';

import { Metrics } from '../../Themes';
import Sunset from '../Sunset';

const SunsetStory = () => {
  return (
    <View style={styles.container}>
      <Sunset
        time={'07:30'}
        receiving={false}
      />
    </View>
  );
};

export default SunsetStory;

const styles = {
  container: {
    height: 100,
    width: Metrics.screenWidth / 2,
    backgroundColor: '#000000'
  }
};
