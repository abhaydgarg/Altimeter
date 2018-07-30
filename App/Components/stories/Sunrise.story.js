import React from 'react';
import { View } from 'react-native';

import { Metrics } from '../../Themes';
import Sunrise from '../Sunrise';

const SunriseStory = () => {
  return (
    <View style={styles.container}>
      <Sunrise
        time={'06:30'}
        receiving={false}
      />
    </View>
  );
};

export default SunriseStory;

const styles = {
  container: {
    height: 100,
    width: Metrics.screenWidth / 2,
    backgroundColor: '#000000'
  }
};
