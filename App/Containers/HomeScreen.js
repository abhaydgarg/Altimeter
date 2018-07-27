import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StatusBar, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNShakeEvent from 'react-native-shake-event';
import Icon from 'react-native-vector-icons/Ionicons';

import Util from '../Lib/Util';
import { Colors } from '../Themes';
import styles from './Styles/HomeScreenStyles';
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
      altitude: 0,
      accuracy: 0,
      level: '',
      lat: 0,
      lon: 0,
      location: 'Unknown',
      sunrise: '0:00',
      sunset: '0:00',
      oxygen: 0
    };
  }

  componentDidMount () {
    RNShakeEvent.addEventListener('shake', () => {
      alert(2);
    });
    Util.getLocation(this.getLocation);
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

  getLocation = (error, position) => {
    if (error === null) {
      let altitude = Math.round(position.coords.altitude);
      if (__DEV__ && Util.isSimulator()) {
        // Dharamshala
        altitude = 1530;
        position.coords.latitude = 32.219044;
        position.coords.longitude = 76.323402;
      }
      let altitudeData = Util.getAltitudeData(altitude);
      let sun = Util.getSunriseSunset(position.coords.latitude, position.coords.longitude);
      this.setState({
        altitude: altitude,
        accuracy: position.coords.altitudeAccuracy,
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        level: altitudeData.level,
        oxygen: altitudeData.oxygen,
        sunrise: Util.formatTime(sun.sunrise),
        sunset: Util.formatTime(sun.sunset)
      }, () => {

      });
    } else {
      console.log(error);
    }
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
                altitude={this.state.altitude}
                accuracy={this.state.accuracy}
                level={this.state.level}
              />
            </View>
            {/* Sunrise & Sunset */}
            <View style={styles.sunriseSunsetContainer}>
              <Sunrise
                time={this.state.sunrise}
                calculating={false}
              />
              <Sunset
                time={this.state.sunset}
                calculating={false}
              />
            </View>
            {/* Coordinates */}
            <View style={styles.coordinatesContainer}>
              <Coordinates
                handleOpenMap={this.handleOpenMap}
                lat={this.state.lat}
                lon={this.state.lon}
                location={this.state.location}
                fetching={false}
              />
            </View>
            {/* Oxygen & Share button */}
            <View style={styles.oxygenShareContainer}>
              <Oxygen
                percentage={this.state.oxygen}
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
