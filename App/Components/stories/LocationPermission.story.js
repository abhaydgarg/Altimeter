import React from 'react';
import { View } from 'react-native';

import LocationPermission from '../LocationPermission';

function onPress () {
  alert('Location Permission');
}

const LocationPermissionStory = () => {
  return (
    <View style={styles.container}>
      <LocationPermission
        handleLocationPermission={onPress}
      />
    </View>
  );
};

export default LocationPermissionStory;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
};
