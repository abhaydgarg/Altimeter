import { createStackNavigator } from 'react-navigation';

import { Fonts } from '../Themes';
import HomeScreen from '../Containers/HomeScreen';
import AboutScreen from '../Containers/AboutScreen';

const PrimaryNavigation = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    AboutScreen: {
      screen: AboutScreen,
      navigationOptions: {
        title: 'About',
        headerTitleStyle: { fontFamily: Fonts.type.regular }
      }
    }
  },
  {
    initialRouteName: 'HomeScreen'
  }
);

export default PrimaryNavigation;
