/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native'
import Hyperlink from 'react-native-hyperlink'
import { AppHeader, Card } from '@/Components'

export default class ChangeAutoship extends Component {
  constructor(props) {
    super(props)
  }

  linkURL = () => {
    return 'https://7ot4562p.synergyworldwide.com/en-us/shop/productwall;category=All%20Products'
  }

  goToURL = () => {
    Linking.openURL(
      'https://7ot4562p.synergyworldwide.com/en-us/shop/productwall;category=All%20Products',
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Change Autoship"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Changing My Autoship" isShadow={true}>
            <View style={styles.textContainer}>
              <Hyperlink
                onPress={() => {
                  this.goToURL()
                }}
                linkStyle={{ color: '#2980b9', fontSize: 13 }}
                linkText={url =>
                  url === this.linkURL() ? 'Synergy’s products' : url
                }
              >
                <Text style={styles.textStyle}>
                  Maintaining a 150 CV Autoship with Synergy is what qualifies
                  you for all commissions. Select from any of
                  {' ' + this.linkURL() + ' '}
                  to make up your 150 CV Autoship.
                </Text>
              </Hyperlink>
              <Text style={styles.textStyle}>
                Please call Synergy’s Customer Service (801) 769-7800 and they
                will help you update your Autoship.
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
  textHeaderStyle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textStyle: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'normal',
    marginBottom: 10,
  },
})
