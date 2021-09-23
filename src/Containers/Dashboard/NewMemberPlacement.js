/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native'
import { useTheme } from '@/Theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPendingMemberPlacement, getPendingTrainingMembers } from './Actions'
import { AppHeader, ListItemContainer, Card } from '@/Components'
import Hyperlink from 'react-native-hyperlink'
import VideoPlayer from 'react-native-video-player'

class NewMemberPlacementDashboardContainer extends Component {
  constructor() {
    super()
    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined,
    }
  }

  componentDidMount() {
    // this.props.getPendingMemberPlacement();
    // this.props.getPendingTrainingMembers();

    global
      .fetch('https://player.vimeo.com/video/288645666/config')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          thumbnailUrl: res.video.thumbs['640'],
          videoUrl:
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video,
        })
      })
  }

  linkURL = () => {
    return 'https://www.synergyworldwide.com/en-us/login/email'
  }

  goToURL = () => {
    Linking.openURL('https://www.synergyworldwide.com/en-us/login/email')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="New Member Placement"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />

        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Member Placement" isShadow={true}>
            <View style={styles.textContainer}>
              <Hyperlink
                onPress={() => {
                  this.goToURL()
                }}
                linkStyle={{ color: '#2980b9', fontSize: 16 }}
                linkText={url => (url === this.linkURL() ? 'Pulse' : url)}
              >
                <Text style={{ fontSize: 16 }}>
                  Click on the name of your new Team Member below and assign
                  their placement within your organizational Team. {'\n'}
                  {'\n'}
                  NOTE: If you have questions regarding placement, watch this
                  Member Placement Video and/or discuss this with your TL and/or
                  other members of your Support Team. You can also look in{' '}
                  {this.linkURL()} to help you determine the best placement for
                  your new Team Members.
                </Text>
              </Hyperlink>

              <View style={{ paddingVertical: 5 }}>
                <Text style={styles.textStyle}>
                  Members waiting to be placed: click on name below to assign
                  placement.
                </Text>
                <ListItemContainer
                  status="children"
                  color="#EFAD4E"
                  plainBackground={false}
                >
                  <Text style={{ fontSize: 17 }}>No new team member</Text>
                </ListItemContainer>
              </View>
            </View>

            <VideoPlayer
              endWithThumbnail
              thumbnail={{ uri: this.state.thumbnailUrl }}
              video={{ uri: this.state.videoUrl }}
              videoWidth={this.state.video.width}
              videoHeight={this.state.video.height}
              ref={r => (this.player = r)}
            />
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})

const mapStateToProps = state => ({
  memberPlacement: state.dashboard,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPendingMemberPlacement,
      getPendingTrainingMembers,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMemberPlacementDashboardContainer)
