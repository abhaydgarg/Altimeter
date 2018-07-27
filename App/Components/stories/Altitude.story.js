import React from 'react';
import { View } from 'react-native';

import Util from '../../Lib/Util';
import Altitude from '../Altitude';

const data = Util.getAltitudeData(8000);

const AltitudeStory = () => {
  return (
    <View style={styles.container}>
      <Altitude
        altitude={8000}
        accuracy={100}
        level={data.level}
      />
    </View>
  );
};

export default AltitudeStory;

const styles = {
  container: {
    height: 150,
    backgroundColor: '#000000'
  }
};
