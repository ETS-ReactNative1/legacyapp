import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import VideoPlayer from 'react-native-video-player'
import { AppHeader, Card } from '@/Components'

export default class LeadershipLive extends Component {
  constructor() {
    super()
    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl1: undefined,
      videoUrl1: undefined,
      thumbnailUrl2: undefined,
      videoUrl2: undefined,
    }
  }

  async getVideoOne() {
    await global
      .fetch('https://player.vimeo.com/video/321876685/config')
      .then(res => res.json())
      .then(res => {
        this.setState({
          thumbnailUrl1: res.video.thumbs['640'],
          videoUrl1:
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video,
        })
      })
  }

  async getVideoTwo() {
    await global
      .fetch('https://player.vimeo.com/video/331984000/config')
      .then(res => res.json())
      .then(res => {
        this.setState({
          thumbnailUrl2: res.video.thumbs['640'],
          videoUrl2:
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video,
        })
      })
  }

  componentDidMount() {
    this.getVideoOne()
    this.getVideoTwo()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Leadership Live"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Leadership Live" isShadow={true}>
            <View style={styles.textContainer}>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{ uri: this.state.thumbnailUrl1 }}
                video={{ uri: this.state.videoUrl1 }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                ref={r => (this.player = r)}
              />
              <Text style={styles.textStyle}>Influence is a Choice</Text>
            </View>

            <View style={styles.textContainer}>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{ uri: this.state.thumbnailUrl2 }}
                video={{ uri: this.state.videoUrl2 }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                ref={r => (this.player = r)}
              />
              <Text style={styles.textStyle}>Big Rocks</Text>
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
