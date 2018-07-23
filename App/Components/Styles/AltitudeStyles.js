import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  altitude: {
    ...Fonts.style.numericBold,
    fontSize: Fonts.size.h1,
    color: Colors.white,
    marginRight: Metrics.smallMargin
  },
  altitudeUnit: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.medium,
    color: Colors.gray
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  accuracyContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  accuracyText: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    color: Colors.white,
    marginRight: Metrics.smallMargin
  },
  accuracy: {
    ...Fonts.style.numeric,
    fontSize: Fonts.size.small,
    color: Colors.white,
    marginTop: 2
  },
  feetContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  feet: {
    ...Fonts.style.numeric,
    color: Colors.white
  },
  feetUnit: {
    ...Fonts.style.normal,
    fontWeight: 'bold',
    color: Colors.gray
  },
  level: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    color: Colors.black,
    backgroundColor: Colors.white,
    padding: 2,
    position: 'absolute',
    top: 0,
    left: 0
  }
});
