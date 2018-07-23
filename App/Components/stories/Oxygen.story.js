import React from 'react';
import { View } from 'react-native';

import Util from '../../Lib/Util';
import Oxygen from '../Oxygen';

const data = Util.getAltitudeData(306);

const OxygenStory = () => {
  return (
    <View style={styles.container}>
      <Oxygen
        percentage={data.oxygen}
      />
    </View>
  );
};

export default OxygenStory;

const styles = {
  container: {
    height: 100,
    backgroundColor: '#000000'
  }
};
