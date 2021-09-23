import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { AppHeader, Card, ListItemContainer } from '@/Components'
import VideoPlayer from 'react-native-video-player'

export default class CompensationTutorial extends Component {
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
      .fetch('https://player.vimeo.com/video/352791517/config')
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
          title="Compensation Tutorial"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card isShadow={true}>
            <View style={styles.textContainer}>
              <ListItemContainer
                status="children"
                color="#01759D"
                plainBackground={false}
              >
                <Text style={styles.textStyle}>
                  Compensation Tutorial Video
                </Text>
                <Text style={{ fontSize: 17, marginTop: 10 }}>
                  It is exciting to understand how you are compensated through
                  the Legacy Network. Review the Compensation Tutorial below to
                  learn exactly how the compensation plan works!
                </Text>
              </ListItemContainer>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{ uri: this.state.thumbnailUrl }}
                video={{ uri: this.state.videoUrl }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                ref={r => (this.player = r)}
              />
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
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
