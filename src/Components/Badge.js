import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const badge = [
  require('../Assets/Images/badge0.jpg'),
  require('../Assets/Images/badge1.jpg'),
  require('../Assets/Images/badge2.jpg'),
  require('../Assets/Images/badge3.jpg'),
  require('../Assets/Images/badge4.jpg'),
  require('../Assets/Images/badge5.jpg'),
  require('../Assets/Images/badge6.jpg'),
  require('../Assets/Images/badge7.jpg'),
  require('../Assets/Images/badge8.jpg'),
  require('../Assets/Images/badge9.jpg'),
  require('../Assets/Images/badge10.jpg'),
  require('../Assets/Images/badge11.jpg'),
  require('../Assets/Images/badge12.jpg'),
  require('../Assets/Images/badge13.jpg'),
  require('../Assets/Images/badge14.jpg'),
  require('../Assets/Images/badge15.jpg'),
  require('../Assets/Images/badge16.jpg'),
]

const Badge = ({ number, containerStyle }) => (
  <View
    style={[
      { justifyContent: 'center', alignItems: 'center', marginRight: 15 },
      containerStyle,
    ]}
  >
    <Image
      source={badge[number]}
      style={{ width: 50, height: 50, resizeMode: 'contain' }}
    />
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10,
      }}
    >
      <Ionicons
        name="ios-star"
        size={15}
        color="gray"
        style={{ marginRight: 5 }}
      />
      <Ionicons
        name="ios-star"
        size={15}
        color="gray"
        style={{ marginRight: 5, marginTop: 15 }}
      />
      <Ionicons
        name="ios-star"
        size={15}
        color="gray"
        style={{ marginRight: 5, marginTop: 15 }}
      />
      <Ionicons name="ios-star" size={15} color="gray" />
    </View>
  </View>
)

export default Badge

const styles = StyleSheet.create({
  numContainer: {
    backgroundColor: '#2e69aa',
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 3,
    width: 40,
    justifyContent: 'space-between',
  },
  LeftRightStar: {
    fontSize: 15,
  },
  middleStar: {
    marginTop: 8,
    fontSize: 15,
  },
})
