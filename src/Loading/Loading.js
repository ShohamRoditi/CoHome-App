import { View, Image } from 'react-native'
import React, { Component } from 'react'
import styles from '../../styles'

class Loading extends Component {
  render() {
    return (
      <View>
        <Image style={styles.loading} source={require('../images/gif3.gif')} />
      </View>
    )
  }
}

export default Loading
