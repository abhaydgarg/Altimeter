import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../Themes';

const layout = false;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  iconContainer: {
    backgroundColor: layout ? Colors.layout.one : Colors.transparent,
    flex: 1,
    justifyContent: 'center'
  },
  icon: {
    fontSize: Fonts.size.h3,
    color: Colors.white
  },
  latLonContainer: {
    backgroundColor: layout ? Colors.layout.two : Colors.transparent,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  separator: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.regular,
    color: Colors.white,
    marginHorizontal: Metrics.smallMargin
  },
  lat: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.regular,
    color: Colors.white
  },
  lon: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.regular,
    color: Colors.white
  },
  locationContainer: {
    backgroundColor: layout ? Colors.layout.three : Colors.transparent,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  location: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    color: Colors.white,
    textAlign: 'center'
  }
});
