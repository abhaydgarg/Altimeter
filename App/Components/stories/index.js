import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { Metrics } from '../../Themes';

import WelcomeStory from './Welcome.story';
import AltitudeStory from './Altitude.story';
import SunriseStory from './Sunrise.story';
import SunsetStory from './Sunset.story';
import CoordinatesStory from './Coordinates.story';
import OxygenStory from './Oxygen.story';
import ShareButtonStory from './ShareButton.story';
import LocationPermissionStory from './LocationPermission.story';
import AboutStory from './About.story';

storiesOf('Components', module)
  .add('Welcome', () =>
    <WelcomeStory />
  )
  .add('Altitude', () =>
    <View style={styles.container}>
      <AltitudeStory />
    </View>
  )
  .add('Sunrise', () =>
    <View style={styles.container}>
      <SunriseStory />
    </View>
  )
  .add('Sunset', () =>
    <View style={styles.container}>
      <SunsetStory />
    </View>
  )
  .add('Coordinates', () =>
    <View style={styles.container}>
      <CoordinatesStory />
    </View>
  )
  .add('Oxygen', () =>
    <View style={styles.container}>
      <OxygenStory />
    </View>
  )
  .add('Share Button', () =>
    <View style={styles.container}>
      <ShareButtonStory />
    </View>
  )
  .add('Location Permission', () =>
    <LocationPermissionStory />
  )
  .add('About', () =>
    <AboutStory />
  );

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: Metrics.paddingHorizontal,
    paddingTop: Metrics.statusBarHeight,
    paddingBottom: Metrics.screenPaddingBottom
  }
};
