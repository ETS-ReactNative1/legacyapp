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
import PDFView from 'react-native-view-pdf'
import Modal from 'react-native-modal'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { AccordionChildCategory, Button } from '@/Components'
var { height, width } = Dimensions.get('window')

export default class AccordionSubCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      expanded: false,
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

  renderSubContent = details => {
    return (
      <View style={styles.subContainer}>
        <View style={{ flex: 1 }}>
          <Text style={{}}>{details.title}</Text>
          {details.content.isPdf ? (
            <Button
              type="primary"
              text="View PDF"
              size="mid"
              buttonStyle={{ height: 35, marginTop: 10 }}
              onPress={() => {
                this.onViewPdf(details.content.url)
              }}
            />
          ) : null}

          <Button
            type="primary"
            text="Add to Invite"
            size="mid"
            buttonStyle={{ height: 35, marginTop: 10 }}
            onPress={() => {
              this.props.onPress(details)
            }}
          />
        </View>
        {details.content.thumbnail !== '' ? (
          <Image
            source={{ uri: details.content.thumbnail }}
            style={styles.imageStyle}
          />
        ) : (
          <View />
        )}
      </View>
    )
  }

  onPressButton = item => {
    this.props.onPress(item)
  }

  render() {
    const details = this.props.content
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => this.toggleExpand()}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 16, color: '#777' }}>
                {this.state.expanded ? ' - ' : ' + '}
              </Text>
              <Text style={styles.title}>{this.props.title}</Text>
            </View>
          </TouchableOpacity>
          <View />
          {this.props.hasSubCategory === 'naa'
            ? this.state.expanded &&
              details.subCategory &&
              details.subCategory.map((item, id) => {
                return (
                  <View
                    key={`${id}_view_${item.id}`}
                    style={{ paddingLeft: 10 }}
                  >
                    <AccordionChildCategory
                      key={`${id}_child_${item.id}`}
                      title={item.title}
                      content={item}
                      hasSubCategory={
                        item.subCategory && item.subCategory.length > 0
                          ? 'naa'
                          : 'wa'
                      }
                      onPress={this.props.onPress}
                    />
                  </View>
                )
              })
            : this.state.expanded && this.renderSubContent(details)}
        </View>
        {this.renderPdfViewer()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#337ab7',
    paddingBottom: 8,
  },
  subContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  imageStyle: {
    width: 140,
    height: 100,
    resizeMode: 'contain',
  },
})
