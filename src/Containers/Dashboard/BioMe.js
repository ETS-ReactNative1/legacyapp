/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native'
import { AppHeader, ActionButton } from '@/Components'
import Modal from 'react-native-modal'
import PDFView from 'react-native-view-pdf'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

var { height, width } = Dimensions.get('window')

export default class BioMe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPdfView: false,
      resource: '',
    }
  }

  onShowPdf = type => {
    const resourceFile = {
      glandular:
        'http://dev.legacynetwork.com/microbiome/src/pdf/GLANDULAR_SYSTEM.pdf',
      joints:
        'http://dev.legacynetwork.com/microbiome/src/pdf/JOINT_SYSTEM.pdf',
      respiratory:
        'http://dev.legacynetwork.com/microbiome/src/pdf/RESPIRATORY_SYSTEM.pdf',
      neurological:
        'http://dev.legacynetwork.com/microbiome/src/pdf/NEUROLOGICAL_SYSTEM.pdf',
      cardiovascular:
        'http://dev.legacynetwork.com/microbiome/src/pdf/CARDIOVASCULAR_SYSTEM.pdf',
      skin: 'http://dev.legacynetwork.com/microbiome/src/pdf/SKIN_SYSTEM.pdf',
      hormone: 'http://dev.legacynetwork.com/microbiome/src/pdf/HORMONE.pdf',
      bloodsugar:
        'http://dev.legacynetwork.com/microbiome/src/pdf/BLOOD_SUGAR.pdf',
      weight: 'http://dev.legacynetwork.com/microbiome/src/pdf/WEIGHT.pdf',
      immunity:
        'http://dev.legacynetwork.com/microbiome/src/pdf/IMMUNITY_SYSTEM.pdf',
    }
    this.setState({ isPdfView: true, resource: resourceFile[type] })
  }

  renderPdfViewer() {
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

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#E1E1EB' }}>
        <AppHeader
          title="MICROBIOME LINKS"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView style={{ flex: 1 }}>
          <Image
            source={require('./Assets/biome_bg.png')}
            style={styles.imageStyle}
          />
          <View style={{ paddingHorizontal: 15 }}>
            <Text
              style={{
                fontSize: 14,
                color: '#8D8A9B',
                textAlign: 'center',
                marginBottom: 15,
                fontStyle: 'italic',
              }}
            >
              For Educational Purposes Only
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#8D8A9B',
                textAlign: 'center',
                fontStyle: 'italic',
              }}
            >
              Click on the body system below to access research studies that
              link an unhealthy microbiome to health challenges related to each
              system. Then, find a list of Synergy products that contain
              ingredients that have been shown to specifically combat these
              challenges as well as support the health of each system in the
              body.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.fabButtonFloat}>
          <ActionButton
            buttonColor="#01A0E0"
            btnOutRange="#01A0E0"
            icon={
              <Image
                source={require('./Assets/gut.png')}
                style={styles.smallImage}
              />
            }
            position="center"
            degrees={360}
          >
            <ActionButton.Item
              size={50}
              buttonColor="#FE6B0F"
              onPress={() => this.onShowPdf('glandular')}
            >
              <Image
                source={require('./Assets/glandular.png')}
                style={styles.smallImage}
              />
            </ActionButton.Item>
            <ActionButton.Item
              size={50}
              buttonColor="#76BC22"
              onPress={() => this.onShowPdf('joints')}
            >
              <Image
                source={require('./Assets/joints.png')}
                style={styles.smallImage}
              />
            </ActionButton.Item>
            <ActionButton.Item
              size={50}
              buttonColor="#002F87"
              onPress={() => this.onShowPdf('respiratory')}
            >
              <Image
                source={require('./Assets/respiratory.png')}
                style={styles.smallImage}
              />
            </ActionButton.Item>
            <ActionButton.Item
              size={50}
              buttonColor="#863399"
              onPress={() => this.onShowPdf('neurological')}
            >
              <Image
                source={require('./Assets/neurological.png')}
                style={styles.smallImage}
              />
            </ActionButton.Item>
            <ActionButton.Item
              size={50}
              buttonColor="#EA0D44"
              onPress={() => this.onShowPdf('cardiovascular')}
            >
              <Image
                source={require('./Assets/cardiovascular.png')}
                style={styles.smallImage}
              />
            </ActionButton.Item>
            <ActionButton.Item
              size={50}
              buttonColor="#FE6B0F"
              onPress={() => this.onShowPdf('skin')}
            >
              <Image
                source={require('./Assets/skin.png')}
                style={styles.smallImage}
              />
            </ActionButton.Item>
            <ActionButton.Item
              size={50}
              buttonColor="#76BC22"
              onPress={() => this.onShowPdf('hormone')}
            >
              <Image
                source={require('./Assets/hormone.png')}
                style={styles.smallImage}
              />
            </ActionButton.Item>
            <ActionButton.Item
              size={50}
              buttonColor="#002F87"
              onPress={() => this.onShowPdf('bloodsugar')}
            >
              <Image
                source={require('./Assets/bloodsugar.png')}
                style={styles.smallImage}
              />
            </ActionButton.Item>
            <ActionButton.Item
              size={50}
              buttonColor="#863399"
              onPress={() => this.onShowPdf('weight')}
            >
              <Image
                source={require('./Assets/weight.png')}
                style={styles.smallImage}
              />
            </ActionButton.Item>
            <ActionButton.Item
              size={50}
              buttonColor="#EA0D44"
              onPress={() => this.onShowPdf('immunity')}
            >
              <Image
                source={require('./Assets/immunity.png')}
                style={styles.smallImage}
              />
            </ActionButton.Item>
          </ActionButton>
        </View>
        {this.renderPdfViewer()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  imageStyle: {
    width: width,
    height: width,
    resizeMode: 'contain',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  smallImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  fabButtonFloat: {
    position: 'absolute',
    bottom: 140,
    left: 0,
    right: 0,
  },
})
