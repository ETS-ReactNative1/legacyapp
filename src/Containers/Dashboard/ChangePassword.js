/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { AppHeader, Card, FormInline, Input, Button } from '@/Components'

export default class ChangePassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPass: '',
      repeatPass: '',
    }
  }

  checkPassword = (newPass, repeatPass) => {
    let isEqual = newPass !== repeatPass ? false : true
    isEqual ? '' : this.setState({ newPass: '', repeatPass: '' })
    return isEqual
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Change my LN Password"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Change my Password" isShadow={true}>
            <View style={styles.textContainer}>
              <FormInline label="New Password">
                <Input
                  secureText={true}
                  placeholder={this.state.newPass}
                  value={this.state.newPass}
                  onChangeText={newPass => this.setState({ newPass })}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>
              <FormInline label="Repeat New Password">
                <Input
                  secureText={true}
                  placeholder={this.state.repeatPass}
                  value={this.state.repeatPass}
                  onChangeText={repeatPass => this.setState({ repeatPass })}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>

              <Button
                type="primaryV2"
                textColor="White"
                text="Update"
                buttonStyle={{ flex: 1 }}
                onPress={() =>
                  this.checkPassword(this.state.newPass, this.state.repeatPass)
                }
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
