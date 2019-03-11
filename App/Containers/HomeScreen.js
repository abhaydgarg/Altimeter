import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StatusBar, ScrollView, TouchableOpacity, RefreshControl, Platform, AppState } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNShakeEvent from 'react-native-shake-event';
import Icon from 'react-native-vector-icons/Ionicons';
import Permissions from 'react-native-permissions';
import Share from 'react-native-share';

import Util from '../Lib/Util';
import Geocoding from '../Lib/Geocoding';
import { Colors } from '../Themes';
import styles from './Styles/HomeScreenStyles';
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
      location: '',
      sunrise: '0:00',
      sunset: '0:00',
      oxygen: 0,
      hasLocationPermission: true,
      refreshing: false,
      receiving: false,
      fetching: false
    };
  }

  componentDidMount () {
    AppState.addEventListener('change', this.handleAppStateChange);
    RNShakeEvent.addEventListener('shake', () => {
      this.getLocation();
    });
    this.getLocation();
  }

  componentWillUnmount () {
    AppState.removeEventListener('change');
    RNShakeEvent.removeEventListener('shake');
  }

  navigateAboutScreen = () => {
    this.props.navigation.navigate('AboutScreen');
  }

  handleShare = () => {
    Share.open({
      title: 'Altimeter - Share location',
      message: [
        `ALTITUDE: ${this.state.altitude} Meters`,
        `LEVEL: ${this.state.level}`,
        `LATITUDE: ${this.state.lat}`,
        `LONGITUDE: ${this.state.lon}`,
        `LOCATION: ${this.state.location}`
      ].join(`\n`)
    }).then((res) => { }).catch((error) => { console.error(error); });
  }

  handleAppStateChange = () => {
    if (AppState.currentState === 'active' && this.state.hasLocationPermission === false) {
      this.hasLocationPermission().then(permission => {
        if (permission === true) {
          this.setState({
            hasLocationPermission: true
          }, () => {
            this.processLocation(false);
          });
        }
      }).catch(error => {
        Util.handleCheckLocationPermissionError(error);
      });
    }
  }

  handleRefresh = () => {
    this.getLocation(true);
  }

  handleLocationPermission = () => {
    Permissions.request('location').then(response => {
      if (response !== 'authorized') {
        if (Platform.OS === 'ios') {
          Permissions.openSettings();
        }
      }
    }).catch(error => {
      Util.handleRequestLocationPermissionError(error);
    });
  }

  hasLocationPermission = () => {
    return Permissions.check('location').then(response => {
      if (response === 'authorized') {
        return true;
      }
      return false;
    }).catch(error => {
      throw error;
    });
  }

  getLocation = (refreshing = false) => {
    this.hasLocationPermission().then(permission => {
      if (permission === false) {
        this.setState({
          hasLocationPermission: false
        });
      } else {
        this.processLocation(refreshing);
      }
    }).catch(error => {
      Util.handleCheckLocationPermissionError(error);
    });
  }

  processLocation = (refreshing) => {
    this.setState({
      refreshing: refreshing,
      receiving: true
    });
    Util.getLocation((error, position) => {
      if (error === null) {
        let distance = Util.getDistance(position.coords.latitude, position.coords.longitude, this.state.lat, this.state.lon);
        let altitude = Math.round(position.coords.altitude);
        let altitudeData = Util.getAltitudeData(altitude);
        let sun = Util.getSunriseSunset(position.coords.latitude, position.coords.longitude);
        this.setState({
          altitude: altitude,
          accuracy: position.coords.altitudeAccuracy,
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          level: altitudeData.level,
          oxygen: altitudeData.oxygen,
          sunrise: sun.sunrise,
          sunset: sun.sunset,
          refreshing: false,
          receiving: false
        }, () => {
          // Do not fetch location if distance is less than 100 meteres
          if (distance > 100) {
            this.setState({
              fetching: true
            });
            Geocoding.reverse(this.state.lat, this.state.lon, (errMessage, address) => {
              if (errMessage === null) {
                this.setState({
                  location: address,
                  fetching: false
                });
              } else {
                this.setState({
                  location: Util.getGeocodingErrorMessage(errMessage),
                  fetching: false
                });
              }
            });
          }
        });
      } else {
        this.setState({
          refreshing: false,
          receiving: false
        });
        Util.handleLocationError(error);
      }
    });
  }

  refreshControl = () => {
    return (
      <RefreshControl
        refreshing={this.state.refreshing}
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
                receiving={this.state.receiving}
                refreshing={this.state.refreshing}
              />
            </View>
            {/* Sunrise & Sunset */}
            <View style={styles.sunriseSunsetContainer}>
              <Sunrise
                time={this.state.sunrise}
                receiving={this.state.receiving}
              />
              <Sunset
                time={this.state.sunset}
                receiving={this.state.receiving}
              />
            </View>
            {/* Coordinates */}
            <View style={styles.coordinatesContainer}>
              <Coordinates
                lat={this.state.lat}
                lon={this.state.lon}
                location={this.state.location}
                fetching={this.state.fetching}
                receiving={this.state.receiving}
              />
            </View>
            {/* Oxygen & Share button */}
            <View style={styles.oxygenShareContainer}>
              <Oxygen
                percentage={this.state.oxygen}
                receiving={this.state.receiving}
              />
              <ShareButton
                handleShare={this.handleShare}
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
    if (this.state.hasLocationPermission === false) {
      return this.renderLocationPermission();
    }
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
