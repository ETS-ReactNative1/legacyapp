/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { AppHeader, Card } from '@/Components'

export default class PaymentHistory extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Payment History"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Payment History" isShadow={true}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>
                Subscription ID not found on this account. Please contact
                support to request for manual audit
              </Text>
            </View>
          </Card>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  textContainer: {
    padding: 15,
  },
  textStyle: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'normal',
    marginBottom: 10,
  },
})
