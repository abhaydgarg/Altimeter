import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {},
  title: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    color: Colors.gray
  },
  body: {
    flex: 1
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: Fonts.size.h5,
    color: Colors.white
  },
  latLonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  separator: {
    ...Fonts.style.normal,
    fontWeight: 'bold',
    color: Colors.white,
    marginHorizontal: Metrics.smallMargin
  },
  lat: {
    ...Fonts.style.numeric,
    color: Colors.white
  },
  lon: {
    ...Fonts.style.numeric,
    color: Colors.white
  },
  locationContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  location: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    color: Colors.white
  }
});
