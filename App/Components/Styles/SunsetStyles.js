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
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: Metrics.images.medium,
    height: Metrics.images.medium
  },
  timeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  time: {
    ...Fonts.style.numeric,
    fontSize: Fonts.size.h4,
    color: Colors.white
  }
});
