import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import ScreenActivityIndicatorStory from './ScreenActivityIndicator.story';
import ScreenMessageStory from './ScreenMessage.story';

storiesOf('Global', module)
  .add('Screen Activity Indicator', () =>
    <View style={styles.container}>
      <ScreenActivityIndicatorStory />
    </View>
  )
  .add('Screen Message', () =>
    <View style={styles.container}>
      <ScreenMessageStory />
    </View>
  )

const styles = {
  container: {
    flex: 1
  }
};
