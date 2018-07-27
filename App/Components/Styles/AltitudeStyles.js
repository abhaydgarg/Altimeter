import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  altitude: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.h1,
    color: Colors.white
  },
  altitudeUnit: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.regular,
    color: Colors.gray
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  accuracyContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  accuracyText: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.regular,
    color: Colors.white,
    marginRight: Metrics.smallMargin - 2
  },
  accuracy: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.regular,
    color: Colors.white,
    marginTop: 2
  },
  feetContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  feet: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.regular,
    color: Colors.white,
    marginRight: Metrics.smallMargin - 2
  },
  feetUnit: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.regular,
    color: Colors.gray
  },
  level: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.medium,
    color: Colors.black,
    backgroundColor: Colors.transparent,
    padding: 2,
    position: 'absolute',
    top: 0,
    left: 0
  }
});
