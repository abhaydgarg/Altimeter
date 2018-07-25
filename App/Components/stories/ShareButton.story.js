import React from 'react';
import { View } from 'react-native';

import { Metrics } from '../../Themes';
import ShareButton from '../ShareButton';

function onPress () {
  alert('Share');
}

const ShareButtonStory = () => {
  return (
    <View style={styles.container}>
      <ShareButton
        handleShare={onPress}
      />
    </View>
  );
};

export default ShareButtonStory;

const styles = {
  container: {
    height: 100,
    width: Metrics.screenWidth * 1 / 3,
    backgroundColor: '#000000'
  }
};
