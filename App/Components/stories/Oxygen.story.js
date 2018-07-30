import React from 'react';
import { View } from 'react-native';

import { Metrics } from '../../Themes';
import Util from '../../Lib/Util';
import Oxygen from '../Oxygen';

const data = Util.getAltitudeData(884);

const OxygenStory = () => {
  return (
    <View style={styles.container}>
      <Oxygen
        percentage={data.oxygen}
        receiving={false}
      />
    </View>
  );
};

export default OxygenStory;

const styles = {
  container: {
    height: 100,
    width: Metrics.screenWidth * 2 / 3,
    backgroundColor: '#000000'
  }
};
