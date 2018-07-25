import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    width: Metrics.images.large,
    height: Metrics.images.large
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Metrics.baseMargin
  },
  name: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.regular,
    color: Colors.black
  },
  version: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.regular,
    color: Colors.black,
    marginHorizontal: Metrics.smallMargin
  },
  build: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.regular,
    color: Colors.secondary
  },
  dev: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.regular,
    color: Colors.info
  }
});
