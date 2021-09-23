/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { AppHeader, Accordion, Card } from '@/Components'

export default class FAQ extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: [
        {
          id: 1,
          title: 'How Does the Money Back Guarantee Work?',
          description:
            "Synergy offers a money-back guarantee. If you are not fully satisfied, simply return any or all of the products in your initial order — used or unused — within 120 days of purchase for a 100% refund. The refund excludes taxes and shipping. You must return all product containers to receive a refund. Please call Synergy's Customer Service (801-769-7800) and they will help you process this refund.",
        },
      ],
    }
  }

  renderAccordion = () => {
    return this.state.response.map((item, id) => {
      return (
        <Accordion key={item.id} title={item.title} desc={item.description} />
      )
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="FAQ"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Frequently Asked Questions" isShadow={true}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Business Challenge</Text>
              {this.renderAccordion()}
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
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10,
  },
})
