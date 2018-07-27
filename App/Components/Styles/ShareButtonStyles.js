import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../Themes';

const containerSize = 60;
const innerContainerSize = 50;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    width: containerSize,
    height: containerSize,
    borderRadius: containerSize / 2,
    borderWidth: 1.5,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconInnerContainer: {
    width: innerContainerSize,
    height: innerContainerSize,
    borderRadius: innerContainerSize / 2,
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: Fonts.size.h3,
    color: Colors.secondary
  }
});
