import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { AppHeader, ListItemContainer, Card } from '@/Components'

export default class MemberActivation extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="New Member Placement"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />

        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Member Activation" isShadow={true}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Activate New Team Member</Text>
              <Text style={{ fontSize: 16 }}>
                Click on the “Activate” button next to the new members name
                below and their business tools will become active.
              </Text>

              <View style={{ paddingVertical: 10 }}>
                <Text style={styles.textStyle}>
                  New Team Members in Training
                </Text>
                <ListItemContainer
                  status="children"
                  color="#EFAD4E"
                  plainBackground={false}
                >
                  <Text style={{ fontSize: 17 }}>No new team member</Text>
                </ListItemContainer>
              </View>
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
