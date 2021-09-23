import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { AppHeader, Card, AccordionVideoContainer } from '@/Components'

import businessVideos from '../Data/businessVideos.json'

export default class BusinessVideos extends Component {
  constructor() {
    super()
    this.state = {}
  }

  renderPartnersPersonalVideos = () => {
    return businessVideos.partnersPersonalVideos.map((item, id) => {
      return (
        <AccordionVideoContainer
          key={id}
          title={item.title}
          contentList={item}
        />
      )
    })
  }

  renderIntroVideos = () => {
    return businessVideos.introVideos.map((item, id) => {
      return (
        <AccordionVideoContainer
          key={id}
          title={item.title}
          contentList={item}
        />
      )
    })
  }

  renderQAQ = () => {
    return businessVideos.qAQ.map((item, id) => {
      return (
        <AccordionVideoContainer
          key={id}
          title={item.title}
          contentList={item}
        />
      )
    })
  }

  renderMarketingDocuments = () => {
    return businessVideos.marketingDocuments.map((item, id) => {
      return (
        <AccordionVideoContainer
          key={id}
          title={item.title}
          contentList={item}
        />
      )
    })
  }

  renderBusinessVideos = () => {
    return businessVideos.businessVideos.map((item, id) => {
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
          title="Business Videos"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="PARTNERS PERSONAL VIDEOS" isShadow={true}>
            <View style={styles.container}>
              {this.renderPartnersPersonalVideos()}
            </View>
          </Card>

          <Card title="INTRODUCTION VIDEOS" isShadow={true}>
            <View style={styles.container}>{this.renderIntroVideos()}</View>
          </Card>

          <Card title="COMMONLY ASKED QUESTIONS" isShadow={true}>
            <View style={styles.container}>{this.renderQAQ()}</View>
          </Card>

          <Card title="MARKETING DOCUMENTS" isShadow={true}>
            <View style={styles.container}>
              {this.renderMarketingDocuments()}
            </View>
          </Card>

          <Card title="BUSINESS VIDEOS" isShadow={true}>
            <View style={styles.container}>{this.renderBusinessVideos()}</View>
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
