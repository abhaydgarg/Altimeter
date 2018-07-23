import React from 'react';
import { View } from 'react-native';

import Sunrise from '../Sunrise';

const SunriseStory = () => {
  return (
    <View style={styles.container}>
      <Sunrise
        time={'06:30'}
        calculating={false}
      />
    </View>
  );
};

export default SunriseStory;

const styles = {
  container: {
    height: 100,
    backgroundColor: '#000000'
  }
};
