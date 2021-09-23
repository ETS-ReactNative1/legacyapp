/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import { Badge } from '@/Components'

const CertificationLevel = ({
  number,
  qualificationText,
  awardText,
  recognitionText,
  title,
  rightButton,
  buttonText,
}) => (
  <View style={{ paddingVertical: 5 }}>
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      {buttonText ? (
        <TouchableOpacity style={[rightButton, { marginTop: -10 }]}>
          <Text style={styles.textButton}>{buttonText}</Text>
        </TouchableOpacity>
      ) : null}
    </View>

    <View style={[styles.container, { alignItems: 'flex-start' }]}>
      {number > -1 ? (
        <View style={{ paddingHorizontal: 10 }}>
          <Badge number={number} />
        </View>
      ) : null}

      <View style={{ flex: 1 }}>
        <Text style={[styles.TextSize, { marginBottom: 5 }]}>
          <Text style={[styles.TextSize, { fontWeight: 'bold' }]}>
            Qualification:{' '}
          </Text>
          {qualificationText}
        </Text>

        {recognitionText ? (
          <Text style={[styles.TextSize, { marginBottom: 5 }]}>
            <Text style={[styles.TextSize, { fontWeight: 'bold' }]}>
              Recognition:{' '}
            </Text>
            {recognitionText}
          </Text>
        ) : null}
        {awardText ? (
          <Text style={[styles.TextSize, { marginBottom: 20 }]}>
            <Text style={[styles.TextSize, { fontWeight: 'bold' }]}>
              {number == 0 ? 'Award: ' : 'Income: '}
            </Text>
            {awardText}
          </Text>
        ) : null}
      </View>
    </View>
  </View>
)

export default CertificationLevel

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextSize: {
    fontSize: 14,
  },
  imageLevel: {
    width: 47,
    height: 47,
    borderRadius: 25,
    backgroundColor: '#2e69aa',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textLevel: {
    fontSize: 20,
    color: 'white',
  },
  textTitle: {
    fontSize: 16,
    color: '#107aa6',
    marginBottom: 10,
    fontWeight: '600',
  },
  textButton: {
    fontSize: 12,
    color: 'white',
  },
})
