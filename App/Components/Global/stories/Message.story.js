import React from 'react';
import { View } from 'react-native';

import Message from '../Message';

const MessageStory = () => {
  return (
    <View style={styles.container}>
      <Message
        message='You can have as many stories as you want. Basically a story is like a visual test case.'
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
};

export default MessageStory;
