import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Colors } from '../Themes';
import About from '../Components/About';

export default class AboutScreen extends Component {

  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: Colors.white
    };
  }

  constructor (props) {
    super(props);
    StatusBar.setBarStyle('light-content', true);
  }

  render () {
    return (
      <About />
    );
  }
}
