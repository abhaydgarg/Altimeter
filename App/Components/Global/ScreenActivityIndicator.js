import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

import withRemote from '../../Lib/RemoteHOC'
import { Colors } from '../../Themes'
import styles from './Styles/ScreenActivityIndicatorStyles'

class ScreenActivityIndicator extends Component {
  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
  }

  static defaultProps = {
    size: 'large',
    color: Colors.black
  }

  render () {
    let { size, color } = this.props
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size={size}
          color={color}
        />
      </View>
    )
  }
}

export default withRemote(ScreenActivityIndicator, 'ScreenActivityIndicator')
