/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button'
import { AppHeader, Card, ListItemContainer } from '@/Components'

const radioProps = [
  { label: 'I want to keep receiving notification messages', value: 0 },
  { label: "I don't want to receive notification messages", value: 1 },
]

export default class Notification extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Notifications"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Preferences" isShadow={true}>
            <View style={styles.textContainer}>
              <RadioForm
                radio_props={radioProps}
                initial={0}
                formHorizontal={false}
                labelHorizontal={true}
                animation={true}
                buttonColor={'#ddd'}
                buttonSize={10}
                onPress={value => {
                  this.setState({ value: value })
                }}
              />
            </View>
          </Card>

          <Card title="Notifications" isShadow={true}>
            <View style={styles.textContainer}>
              <ListItemContainer
                status="children"
                color="#00759E"
                plainBackground={false}
              >
                <Text style={{ fontSize: 15 }}>
                  Don’t miss our first official Legacy Network Live Business
                  Presentation tomorrow, Thursday, October 4, at 7:00 p.m. at
                  Synergy Worldwide’s headquarters (2901 West Blue Grass Blvd.,
                  Suite 101, Lehi, Utah). If you live out of state, please view
                  presentation from your Legacy Network website by clicking the
                  “live broadcast” link tomorrow at 7pm Mountain Time! BRING A
                  FRIEND!
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontStyle: 'italic',
                    marginTop: 10,
                    textAlign: 'right',
                  }}
                >
                  10-04-2018 07:56:42 am
                </Text>
              </ListItemContainer>
              <ListItemContainer
                status="children"
                color="#00759E"
                plainBackground={false}
              >
                <Text style={{ fontSize: 15 }}>
                  Our first Live Business Presentation is TONIGHT, 10/4 at 7pm
                  MT! (2901 West Blue Grass Blvd., Suite 101, Lehi, Utah).
                  (Also, view presentation from your LN website by clicking the
                  "Live Broadcast" link at 7pm MT).
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontStyle: 'italic',
                    marginTop: 10,
                    textAlign: 'right',
                  }}
                >
                  10-04-2018 07:56:40 am
                </Text>
              </ListItemContainer>
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
