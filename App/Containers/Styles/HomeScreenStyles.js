import { StyleSheet, Platform } from 'react-native';

import { Metrics, Colors, Fonts } from '../../Themes';

const layout = false;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? Metrics.statusBarHeight + 5 : Metrics.statusBarHeight - 10
  },
  body: {
    flex: 1,
    paddingHorizontal: Metrics.basePadding
  },
  scrollViewcontentContainer: {
    flexGrow: 1
  },
  altitudeContainer: {
    backgroundColor: layout ? Colors.layout.two : Colors.transparent,
    flex: 3
  },
  sunriseSunsetContainer: {
    backgroundColor: layout ? Colors.layout.three : Colors.transparent,
    flexDirection: 'row',
    flex: 1
  },
  coordinatesContainer: {
    backgroundColor: layout ? Colors.layout.four : Colors.transparent,
    flex: 1
  },
  oxygenShareContainer: {
    backgroundColor: layout ? Colors.layout.five : Colors.transparent,
    flexDirection: 'row',
    flex: 1
  },
  footer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.baseMargin,
    paddingHorizontal: Metrics.basePadding,
    paddingBottom: Metrics.screenPaddingBottom
  },
  footerInstruction: {
    flex: 1,
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.small,
    color: Colors.secondary
  },
  footerInfoIcon: {
    fontSize: Fonts.size.h4,
    color: Colors.secondary
  }
});
