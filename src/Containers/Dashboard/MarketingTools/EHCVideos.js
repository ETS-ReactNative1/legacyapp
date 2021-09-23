/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { AppHeader, Card, AccordionVideoContainer } from '@/Components'
import ehcVideos from '../Data/ehcVideos.json'

export default class EHCVideos extends Component {
  constructor() {
    super()
    this.state = {}
  }

  renderEliteHealth = () => {
    return ehcVideos.eliteHealth.map((item, id) => {
      return (
        <AccordionVideoContainer
          key={id}
          title={item.title}
          contentList={item}
        />
      )
    })
  }

  renderEliteWebsiteContent = () => {
    return ehcVideos.eliteWebsiteContent.map((item, id) => {
      return (
        <AccordionVideoContainer
          key={id}
          title={item.title}
          contentList={item}
        />
      )
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Elite Health Challenge"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Elite Health" isShadow={true}>
            <View style={styles.container}>{this.renderEliteHealth()}</View>
          </Card>

          <Card title="Elite Health Challenge Website Content" isShadow={true}>
            <View style={styles.container}>
              {this.renderEliteWebsiteContent()}
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
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textContainer: {
    padding: 15,
  },
  textStyle: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
})
