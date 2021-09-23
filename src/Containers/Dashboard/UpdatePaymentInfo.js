/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {
  AppHeader,
  Card,
  Input,
  Button,
  FormInline,
  PickList,
} from '@/Components'

export default class UpdatePaymentInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardNo: '',
      cardSecCode: '',
    }
  }

  getMonth = () => {
    let month = []
    for (let index = 1; index <= 12; index++) {
      month.push({ label: '0' + index, value: '0' + index })
    }
    return month
  }

  getYear = () => {
    let month = []
    const monthFrom = 2019
    const monthTo = 2033
    for (let index = monthFrom; index <= monthTo; index++) {
      month.push({ label: '' + index, value: '' + index })
    }
    return month
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Update Payment Information"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Update Payment Info" isShadow={true}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Card Expiration</Text>
              <View style={[styles.rowContainer]}>
                <PickList
                  placeholder={{}}
                  items={this.getMonth()}
                  onValueChange={value => {
                    this.setState({ month: value })
                  }}
                  containerStyle={{ flex: 1, marginRight: 5 }}
                />
                <PickList
                  placeholder={{}}
                  items={this.getYear()}
                  onValueChange={value => {
                    this.setState({ year: value })
                  }}
                  containerStyle={{ flex: 1, marginLeft: 5 }}
                />
              </View>
              <FormInline label="Card No.">
                <Input
                  placeholder={this.state.cardNo}
                  value={this.state.cardNo}
                  onChangeText={cardNo => this.setState({ cardNo })}
                  keyboardType={'numeric'}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>
              <FormInline label="Card Security Code (CVV)">
                <Input
                  placeholder={this.state.cardSecCode}
                  value={this.state.cardSecCode}
                  onChangeText={cardSecCode => this.setState({ cardSecCode })}
                  keyboardType={'numeric'}
                  maxLength={3}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>
              <Button
                type="primaryV2"
                textColor="White"
                text="Update"
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
  textContainer: {
    padding: 15,
  },
  textStyle: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
