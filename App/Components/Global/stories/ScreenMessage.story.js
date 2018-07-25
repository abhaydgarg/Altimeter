import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ScreenMessage from '../ScreenMessage';

const ScreenMessageStory = () => {
  return (
    <View style={styles.container}>
      <ScreenMessage>
        <Icon name='md-alert' style={{ color: 'red', textAlign: 'center', fontSize: 40 }} />
        <Text style={{ fontWeight: 'bold', color: 'white' }}>ERROR FOUND</Text>
      </ScreenMessage>
    </View>
  );
};

export default ScreenMessageStory;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
};
