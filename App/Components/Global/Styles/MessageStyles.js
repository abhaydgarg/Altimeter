import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../../Themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: Metrics.statusBarHeight,
    padding: Metrics.basePadding
  },
  message: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    color: Colors.black,
    textAlign: 'center'
  }
});
