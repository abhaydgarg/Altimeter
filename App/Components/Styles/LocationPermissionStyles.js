import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../Themes';

const layout = false;

export default StyleSheet.create({
  container: {
    backgroundColor: layout ? Colors.layout.one : Colors.transparent,
    alignItems: 'center',
    paddingHorizontal: Metrics.basePadding
  },
  icon: {
    backgroundColor: layout ? Colors.layout.two : Colors.transparent,
    fontSize: Fonts.size.h2,
    color: Colors.white
  },
  description: {
    backgroundColor: layout ? Colors.layout.three : Colors.transparent,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    color: Colors.gray,
    textAlign: 'center',
    marginVertical: Metrics.doubleBaseMargin
  },
  buttonContainer: {
    backgroundColor: layout ? Colors.layout.four : Colors.transparent
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: Metrics.smallPadding,
    paddingHorizontal: Metrics.basePadding
  },
  text: {
    fontFamily: Fonts.type.iceberg,
    fontSize: Fonts.size.medium,
    color: Colors.black
  }
});
