import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: Metrics.images.medium,
    height: Metrics.images.medium
  },
  percentageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  percentage: {
    ...Fonts.style.numeric,
    fontSize: Fonts.size.h4,
    color: Colors.white,
    marginRight: Metrics.baseMargin
  }
});
