/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import VideoPlayer from 'react-native-video-player'
import { AppHeader, Card } from '@/Components'
import productVideos from './Data/productVideos.json'

export default class ProductTestimonial extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Product Testimonials"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Product Testimonials" isShadow={true}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>
                The following videos represent the opinions of individuals and
                are not a guarantee of health outcomes. Taking any Synergy
                products DOES NOT guarantee health outcomes in any way.
              </Text>
              {productVideos.listProductTesti.map((res, id) => {
                return (
                  <View key={id} style={{ paddingBottom: 15 }}>
                    <Text style={[styles.title, { color: 'black' }]}>
                      {res.title}
                    </Text>
                    <VideoPlayer
                      endWithThumbnail
                      thumbnail={{ uri: res.content[0].thumbnail }}
                      video={{ uri: res.content[0].url }}
                      videoWidth={1280}
                      videoHeight={720}
                      ref={r => (this.player = r)}
                    />
                  </View>
                )
              })}
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
    color: 'red',
    fontSize: 13,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  urlTextStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#337ab7',
  },
})
