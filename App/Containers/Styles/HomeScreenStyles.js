import { StyleSheet } from 'react-native';

import { AppStyles, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    ...AppStyles.screen.container,
    paddingHorizontal: Metrics.paddingHorizontal,
    paddingTop: Metrics.statusBarHeight,
    paddingBottom: Metrics.screenPaddingBottom
  }
});
