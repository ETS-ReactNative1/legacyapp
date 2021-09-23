import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native'
import productVideos from '../Data/productVideos.json'
import { AppHeader, Card, AccordionVideoContainer } from '@/Components'

export default class ProductsVideo extends Component {
  constructor() {
    super()
    this.state = {}
  }

  renderPartnersVideo = () => {
    return productVideos.listPartnersVideo.map((item, id) => {
      return (
        <AccordionVideoContainer
          key={id}
          title={item.title}
          contentList={item}
        />
      )
    })
  }

  renderIntroVideo = () => {
    return productVideos.listIntroVideo.map((item, id) => {
      return (
        <AccordionVideoContainer
          key={id}
          title={item.title}
          contentList={item}
        />
      )
    })
  }

  renderProducts = () => {
    return productVideos.listProducts.map((item, id) => {
      return (
        <AccordionVideoContainer
          key={id}
          title={item.title}
          contentList={item}
        />
      )
    })
  }

  renderProductCat = () => {
    return productVideos.listProductCat.map((item, id) => {
      return (
        <AccordionVideoContainer
          key={id}
          title={item.title}
          contentList={item}
        />
      )
    })
  }

  renderProductTesti = () => {
    return productVideos.listProductTesti.map((item, id) => {
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
          title="Products"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="PARTNERS PERSONAL VIDEOS" isShadow={true}>
            <View style={styles.container}>{this.renderPartnersVideo()}</View>
          </Card>

          <Card title="INTRODUCTION VIDEOS" isShadow={true}>
            <View style={styles.container}>{this.renderIntroVideo()}</View>
          </Card>

          <Card title="PRODUCTS" isShadow={true}>
            <View style={styles.container}>{this.renderProducts()}</View>
          </Card>

          <Card title="PRODUCT CATEGORIES" isShadow={true}>
            <View style={styles.container}>{this.renderProductCat()}</View>
          </Card>

          <Card title="PRODUCT TESTIMONIALS" isShadow={true}>
            <View style={styles.container}>{this.renderProductTesti()}</View>
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
