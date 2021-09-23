/* eslint-disable no-bitwise */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native'
import VideoPlayer from 'react-native-video-player'
import PDFView from 'react-native-view-pdf'
import { Button } from '@/Components'
import Modal from 'react-native-modal'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
var { height, width } = Dimensions.get('window')

export default class AccordionVideoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      expanded: false,
      isCollapse: '+',
      resource: '',
      isPdfView: false,
    }
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  renderPdfViewer = () => {
    return (
      <Modal
        style={{ margin: 0, paddingTop: 80 }}
        isVisible={this.state.isPdfView}
      >
        <View
          style={{
            backgroundColor: '#202020',
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            style={{ alignSelf: 'flex-end' }}
            onPress={() => this.setState({ isPdfView: false })}
          >
            <FontAwesome name="close" color="#CCCCCC" size={30} />
          </TouchableOpacity>
        </View>
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={this.state.resource}
          resourceType={'url'}
          onLoad={() => console.log('')}
          onError={() => console.log('Cannot render PDF')}
        />
      </Modal>
    )
  }

  onViewPdf = pdfFile => {
    this.setState({ isPdfView: true, resource: pdfFile })
  }

  renderContent = content => {
    if (content.length > 0) {
      return content.map((res, id) => {
        if ((typeof res.isPdf !== 'undefined') & res.isPdf) {
          return (
            <View key={id} style={{ paddingBottom: 15 }}>
              <Text style={[styles.title, { color: 'black' }]}>
                {res.title}
              </Text>
              <Image
                source={{ uri: res.thumbnail }}
                style={{
                  height: 250,
                  width: width * 0.85,
                  resizeMode: 'cover',
                }}
              />
              <Button
                type="primaryV2"
                textColor="White"
                text="View PDF"
                buttonStyle={{ marginTop: 10 }}
                onPress={() => this.onViewPdf(res.url)}
              />
            </View>
          )
        } else {
          return (
            <View key={id} style={{ paddingBottom: 15 }}>
              <Text style={[styles.title, { color: 'black' }]}>
                {res.title}
              </Text>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{ uri: res.thumbnail }}
                video={{ uri: res.url }}
                videoWidth={1280}
                videoHeight={720}
                ref={r => (this.player = r)}
              />
            </View>
          )
        }
      })
    } else {
      return (
        <VideoPlayer
          endWithThumbnail
          thumbnail={{ uri: content.thumbnail }}
          video={{ uri: content.url }}
          videoWidth={1280}
          videoHeight={720}
          ref={r => (this.player = r)}
        />
      )
    }
  }

  render() {
    const { content } = this.props.contentList
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => this.toggleExpand()}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#777' }}>
                {this.state.expanded ? ' - ' : ' + '}
              </Text>
              <Text style={styles.title}>{this.props.title}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.parentHr} />
          {this.state.expanded && this.renderContent(content)}
        </View>
        {this.renderPdfViewer()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderLeftWidth: 0.5,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    marginBottom: 10,
    borderRadius: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#337ab7',
    paddingBottom: 8,
  },
  child: {
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    padding: 16,
  },
})
