import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../Themes';

const layout = false;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    backgroundColor: layout ? Colors.layout.one : Colors.transparent,
    marginRight: Metrics.smallMargin
  },
  image: {
    width: Metrics.images.medium,
    height: Metrics.images.medium
  },
  timeContainer: {
    backgroundColor: layout ? Colors.layout.two : Colors.transparent,
    marginLeft: Metrics.smallMargin
  },
  time: {
    fontFamily: Fonts.type.iceland,
    fontSize: Fonts.size.h3,
    color: Colors.white
  }
});
