import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import ScreenActivityIndicatorStory from './ScreenActivityIndicator.story';
import ScreenMessageStory from './ScreenMessage.story';
import MessageStory from './Message.story';

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
  .add('Message', () =>
    <MessageStory />
  );

const styles = {
  container: {
    flex: 1
  }
};
