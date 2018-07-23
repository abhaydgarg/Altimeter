import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../Containers/HomeScreen';

const PrimaryNavigation = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'HomeScreen'
  }
);

export default PrimaryNavigation;
