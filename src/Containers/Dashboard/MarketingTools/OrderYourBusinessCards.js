/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { AppHeader, FormInline, Card, Button, Input } from '@/Components'

export default class OrderYourBusinessCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      PUrl: '',
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Business Information Details"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Business Card Information Details" isShadow={true}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle} />
              <FormInline label="Name">
                <Input
                  placeholder={this.state.name}
                  value={this.state.name}
                  onChangeText={name => this.setState({ name })}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>
              <FormInline label="Email">
                <Input
                  placeholder={this.state.email}
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>
              <FormInline label="Phone No:">
                <Input
                  placeholder={this.state.phone}
                  value={this.state.phone}
                  onChangeText={phone => this.setState({ phone })}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>
              <FormInline label="PUrl">
                <Input
                  placeholder={this.state.PUrl}
                  value={this.state.PUrl}
                  onChangeText={PUrl => this.setState({ PUrl })}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>

              <Button
                type="primaryV2"
                textColor="White"
                text="Order Now!"
                buttonStyle={{ flex: 1 }}
                onPress={() => {}}
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
    padding: 15,
  },
  textStyle: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  urlTextStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#337ab7',
  },
})
