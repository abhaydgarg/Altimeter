import React from 'react';
import { View } from 'react-native';

import About from '../About';

const AboutStory = () => {
  return (
    <View style={styles.container}>
      <About />
    </View>
  );
};

export default AboutStory;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
};
