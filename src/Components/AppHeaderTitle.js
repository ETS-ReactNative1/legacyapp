import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Badge } from '@/Components'

const AppHeaderTitle = ({ title, linkText, onPress }) => (
  <View style={styles.subnav}>
    <View style={styles.imageLevel}>
      <Badge number={10} />
    </View>
    <Text style={styles.headerTitle}>{title}</Text>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.linkTextContainer}>
        <Text style={styles.linkText}>{linkText}</Text>
        <Ionicons
          name="ios-arrow-forward"
          size={15}
          color="#337ab7"
          style={{ marginTop: 3 }}
        />
      </View>
    </TouchableOpacity>
  </View>
)

export default AppHeaderTitle

const styles = StyleSheet.create({
  navButton: {
    position: 'absolute',
    left: 20,
  },
  subnav: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 8,
  },
  headerTitle: {
    fontSize: 15,
    color: '#444',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#337ab7',
    fontSize: 13,
    marginRight: 5,
  },
  linkTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  imageLevel: {
    position: 'absolute',
    right: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLevel: {
    fontSize: 20,
    color: 'white',
  },
})
