import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Colors, Fonts } from '../../../Themes';
import ScreenMessage from '../ScreenMessage';

const ScreenMessageStory = () => {
  return (
    <View style={styles.container}>
      <ScreenMessage>
        <Icon name='md-alert' style={{ color: Colors.error, textAlign: 'center', fontSize: Fonts.size.h3 }} />
        <Text style={{ color: Colors.white }}>ERROR FOUND</Text>
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
