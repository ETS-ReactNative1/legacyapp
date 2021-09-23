import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const AppHeader = ({ title, onLeftButtonPress, isHeaderTextOnly }) => (
  <View style={styles.navbar}>
    {isHeaderTextOnly ? null : (
      <TouchableOpacity style={styles.navButton} onPress={onLeftButtonPress}>
        <Icon name="bars" size={23} color="white" />
      </TouchableOpacity>
    )}

    <Text style={styles.navbarTitle}>{title}</Text>
  </View>
)

export default AppHeader

const styles = StyleSheet.create({
  navButton: {
    position: 'absolute',
    left: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#545454',
    paddingTop: 10,
    paddingBottom: 10,
  },
  navbarTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
})
