/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { AppHeader, Card } from '@/Components'
import VideoPlayer from 'react-native-video-player'

export default class ProductUsage extends Component {
  constructor() {
    super()
    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined,
    }
  }

  async getVideo() {
    await global
      .fetch('https://player.vimeo.com/video/345478127/config')
      .then(res => res.json())
      .then(res => {
        this.setState({
          thumbnailUrl: res.video.thumbs['640'],
          videoUrl:
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video,
        })
      })
  }

  componentDidMount() {
    this.getVideo()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Product Usage"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Product Usage" isShadow={true}>
            <View style={styles.textContainer}>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{ uri: this.state.thumbnailUrl }}
                video={{ uri: this.state.videoUrl }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                ref={r => (this.player = r)}
              />
              <Text style={styles.textStyle}>
                Learn about the products that come in your enrollment product
                page - the Elite Health Challenge product line!
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
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
})
