import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    marginRight: Metrics.smallMargin
  },
  image: {
    width: Metrics.images.medium,
    height: Metrics.images.medium
  },
  percentageContainer: {
    marginLeft: Metrics.smallMargin
  },
  percentage: {
    fontFamily: Fonts.type.iceland,
    fontSize: Fonts.size.h3,
    color: Colors.white
  }
});
