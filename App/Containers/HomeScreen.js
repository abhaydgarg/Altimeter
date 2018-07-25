import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StatusBar, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNShakeEvent from 'react-native-shake-event';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './Styles/HomeScreenStyles';
import { Colors } from '../Themes';
import ScreenActivityIndicator from '../Components/Global/ScreenActivityIndicator';
import LocationPermission from '../Components/LocationPermission';
import Altitude from '../Components/Altitude';
import Sunrise from '../Components/Sunrise';
import Sunset from '../Components/Sunset';
import Coordinates from '../Components/Coordinates';
import Oxygen from '../Components/Oxygen';
import ShareButton from '../Components/ShareButton';

export default class HomeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
    StatusBar.setBarStyle('light-content', true);
    this.state = {

    };
  }

  componentDidMount () {
    RNShakeEvent.addEventListener('shake', () => {
      alert(2);
    });
  }

  componentWillUnmount () {
    RNShakeEvent.removeEventListener('shake');
  }

  navigateAboutScreen = () => {
    this.props.navigation.navigate('AboutScreen');
  }

  handleRefresh = () => {
    alert(1);
  }

  handleLocationPermission = () => {
    alert(1);
  }

  refreshControl = () => {
    return (
      <RefreshControl
        refreshing={false}
        tintColor={Colors.white}
        colors={[Colors.black]}
        onRefresh={this.handleRefresh}
      />
    );
  }

  renderLocationPermission = () => {
    return (
      <LocationPermission
        handleLocationPermission={this.handleLocationPermission}
      />
    );
  }

  renderActivityIndicator = () => {
    return <ScreenActivityIndicator />;
  }

  renderContent = () => {
    return (
      <Fragment>
        {/* Body */}
        <View style={styles.body}>
          <ScrollView
            contentContainerStyle={styles.scrollViewcontentContainer}
            refreshControl={this.refreshControl()}
          >
            {/* Altitude */}
            <View style={styles.altitudeContainer}>
              <Altitude
                altitude={8848}
                accuracy={150}
                level={'Low'}
              />
            </View>
            {/* Sunrise & Sunset */}
            <View style={styles.sunriseSunsetContainer}>
              <Sunrise
                time={'06:30'}
                calculating={false}
              />
              <Sunset
                time={'07:30'}
                calculating={false}
              />
            </View>
            {/* Coordinates */}
            <View style={styles.coordinatesContainer}>
              <Coordinates
                lat={32.219042}
                lon={76.323404}
                location={'Ram Nagar, Dharamshala, 176215, Himachal Pradesh, India'}
                fetching={false}
              />
            </View>
            {/* Oxygen & Share button */}
            <View style={styles.oxygenShareContainer}>
              <Oxygen
                percentage={20}
              />
              <ShareButton
                handleShare={() => { }}
              />
            </View>
          </ScrollView>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerInstruction}>PULL OR SHAKE TO REFRESH</Text>
          <TouchableOpacity
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            onPress={this.navigateAboutScreen}
          >
            <Icon
              name='ios-information-circle'
              style={styles.footerInfoIcon}
            />
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }

  renderIf () {
    // return this.renderActivityIndicator();
    // return this.renderLocationPermission();
    return this.renderContent();
  }

  render () {
    return (
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        {this.renderIf()}
      </LinearGradient>
    );
  }
}
