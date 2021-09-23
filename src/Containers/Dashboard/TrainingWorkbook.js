/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Linking,
  TouchableOpacity,
} from 'react-native'
import { AppHeader, Card } from '@/Components'
const { width, height } = Dimensions.get('window')

export default class TrainingWorkbook extends Component {
  goToUrl = () => {
    Linking.openURL(
      'http://dev.legacynetwork.com/files/Entrepreneurship_Training_Workbook.pdf',
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Entrepreneurship Training Workbook"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Entrepreneurship Training Workbook" isShadow={true}>
            <View style={styles.imageContainer}>
              <TouchableOpacity onPress={() => this.goToUrl()}>
                <Image
                  style={styles.imageStyle}
                  source={{
                    uri: 'http://dev.legacynetwork.com/files/bookcover.jpg',
                  }}
                />
              </TouchableOpacity>
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
  imageContainer: {
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: width * 0.9,
    height: 468,
    resizeMode: 'contain',
  },
})
