/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getEliteHealthChallengeMembers } from './Actions'
import { AppHeader, Button, ListItemContainer, Card } from '@/Components'

class EliteHealthChallengeParticipant extends Component {
  componentDidMount() {
    this.props.getEliteHealthChallengeMembers({})
  }

  render() {
    const { eliteParticipants } = this.props.participants
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="My Elite Health Challenge Members"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />

        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="My Elite Health Challenge Members" isShadow={true}>
            <View style={styles.textContainer}>
              <Text style={{ fontSize: 16 }}>
                Listed below are the names of your Elite Health Challenge
                participants. Support each of them as they participate on the
                challenge and encourage them to stay connected to the support
                available. When it is time, help them reorder the products they
                like best when they have completed their experience.
              </Text>

              <View style={{ paddingVertical: 10 }}>
                <Text style={styles.textStyle}>
                  Elite Health Challenge Participants
                </Text>
                {eliteParticipants.map((res, id) => {
                  return (
                    <ListItemContainer
                      key={id}
                      status="children"
                      color="#01759D"
                      plainBackground={false}
                    >
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                          <Text style={{ fontSize: 17 }}>
                            {res.first_name} {res.last_name}
                          </Text>
                        </View>
                        <Button
                          type="primary"
                          text="Resend"
                          buttonStyle={{ height: 40, width: 100 }}
                        />
                      </View>
                    </ListItemContainer>
                  )
                })}
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

const mapStateToProps = state => ({
  participants: state.dashboard,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getEliteHealthChallengeMembers,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EliteHealthChallengeParticipant)
