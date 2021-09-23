/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { AppHeader, Card } from '@/Components'

export default class PreviewContactPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Settings & Contact Info"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Contact Page" isShadow={true} />
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
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10,
  },
})
