/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Card = ({
  title,
  subtitle,
  children,
  isShadow,
  rightButton,
  rightButtonStyle,
  rightOnPress,
  contentStyle,
}) => (
  <View style={[styles.card, isShadow ? styles.cardShadow : {}, contentStyle]}>
    {rightButton ? (
      <View
        style={[
          styles.titleContainer,
          {
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
        <TouchableOpacity onPress={rightOnPress}>
          <View style={[{ flexDirection: 'row' }, rightButtonStyle]}>
            <Text style={[styles.titleStyle, { fontSize: 14, color: 'white' }]}>
              {rightButton}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.titleContainer}>
        <Text style={[styles.titleStyle, { marginBottom: 10 }]}>{title}</Text>
      </View>
    )}
    {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

    {children}
  </View>
)

export default Card

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 3,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  cardShadow: {
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333333',
    marginTop: -5,
    marginBottom: 10,
  },
  titleContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
})
