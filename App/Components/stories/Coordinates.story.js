import React from 'react';
import { View } from 'react-native';

import Coordinates from '../Coordinates';

const CoordinatesStory = () => {
  return (
    <View style={styles.container}>
      <Coordinates
        lat={32.219042}
        lon={76.323404}
        location={'Ram Nagar, Dharamshala, 176215, Himachal Pradesh, India'}
        fetching={false}
        receiving={false}
      />
    </View>
  );
};

export default CoordinatesStory;

const styles = {
  container: {
    height: 150,
    backgroundColor: '#000000'
  }
};
