/* @flow */

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class TeamLegacy extends Component {
  render() {
    return (
      <View style={styles.legacy}>
        <View
          style={[
            styles.iconCircle,
            { backgroundColor: this.props.bulletColor },
          ]}
        />
        <Text style={styles.details}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  legacy: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  iconCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
})
