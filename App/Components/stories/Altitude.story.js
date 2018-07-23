import React from 'react';
import { View } from 'react-native';

import Util from '../../Lib/Util';
import Altitude from '../Altitude';

const data = Util.getAltitudeData(306);

const AltitudeStory = () => {
  return (
    <View style={styles.container}>
      <Altitude
        altitude={8848}
        accuracy={-50}
        level={data.level}
      />
    </View>
  );
};

export default AltitudeStory;

const styles = {
  container: {
    height: 200,
    backgroundColor: '#000000'
  }
};
