/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { AppHeader, Card } from '@/Components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMemberCommitment, getSponsoredList } from './Actions'

const Container = ({ title, desc }) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 3,
      padding: 10,
      borderBottomWidth: 8,
      borderColor: '#0172A1',
      borderWidth: 0.5,
      marginBottom: 5,
    }}
  >
    <Ionicons name="ios-arrow-forward" size={20} color="black" />
    <View style={{ marginLeft: 5 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
          marginBottom: 5,
        }}
      >
        {title}
      </Text>
      <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>
        {desc}
      </Text>
    </View>
  </View>
)

class WeeklyMeetingOutline extends Component {
  componentDidMount() {
    this.props.getMemberCommitment()
    this.props.getSponsoredList()
  }

  renderTableHeader = () => {
    const { user, member_commitment } = this.props.members
    const sponsored = this.props.sponsored
    console.log(sponsored, user)
    return (
      <View
        style={{
          paddingTop: 10,
          borderBottomColor: '#F1F1F1',
          borderBottomWidth: 2,
        }}
      >
        <Grid>
          <Col style={{ width: 200 }}>
            <Text style={styles.tableHeader}>Name</Text>
          </Col>
          <Col style={{ width: 200 }}>
            <Text style={styles.tableHeader}>Business Goal</Text>
          </Col>
          <Col style={{ width: 200 }}>
            <Text style={styles.tableHeader}>Business Goal Due Date</Text>
          </Col>
          <Col style={{ width: 200 }}>
            <Text style={styles.tableHeader}>Next Step Goal</Text>
          </Col>
          <Col style={{ width: 200 }}>
            <Text style={styles.tableHeader}>Next Step Goal Due Date</Text>
          </Col>
        </Grid>
        <Grid>
          <Col style={{ width: 200 }}>
            <Text style={styles.listText}>
              {user.first_name} {user.last_name}
            </Text>
          </Col>
          <Col style={{ width: 200 }}>
            <Text style={styles.listText}>{member_commitment.goal}</Text>
          </Col>
          <Col style={{ width: 200 }}>
            <Text style={styles.listText}>
              {moment(member_commitment.due_date).format('MMM DD, YYYY')}
            </Text>
          </Col>
          <Col style={{ width: 200 }}>
            <Text style={styles.listText}>
              Complete Trello tasks on personal lists
            </Text>
          </Col>
          <Col style={{ width: 200 }}>
            <Text style={styles.listText}>Aug 30, 2019</Text>
          </Col>
        </Grid>
        {sponsored.map((res, id) => {
          return (
            <Grid key={id}>
              <Col style={{ width: 200 }}>
                <Text style={styles.listText}>
                  {res.first_name} {res.last_name}
                </Text>
              </Col>
            </Grid>
          )
        })}
        <View style={styles.parentHr} />
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Weekly Meeting Outline"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Team Meeting Agenda" isShadow={true}>
            <View style={styles.textContainer}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>
                PRE-MEETING PREPARATION
              </Text>
              <Text style={{ fontSize: 14, color: '#000', marginLeft: 10 }}>
                1. In your Success Compass, review your HEALTH GOAL and
                associated NEXT STEP GOAL and ACTIONS for the last week. {'\n'}
                2. Record the RESULTS of your ACTIONS last week.{'\n'}
                3. Evaluate the gap between your NEXT STEP GOAL and the RESULTS
                you got from the ACTIONS you took.{'\n'}
                4. Create your plan for the next week by recording your new NEXT
                STEP GOAL, BY WHEN DATE, and ACTIONS.{'\n'}
                5. Repeat Steps 1 through 4 with your BUSINESS GOAL.
              </Text>

              <View style={styles.container}>
                <Text>
                  Welcome
                  .....................................................................
                </Text>
                <Text style={{ fontWeight: 'bold' }}>Team Leader</Text>
                <Text>
                  Introductions
                  ...............................................................
                </Text>
                <Text style={{ fontWeight: 'bold' }}>Team Members</Text>
                <Text>Recognition: New Achievement Level Celebration ...</Text>
                <Text style={{ fontWeight: 'bold' }}>Team Leader</Text>
                <Text>
                  Review Purpose of Meeting and Agenda ...................
                </Text>
                <Text style={{ fontWeight: 'bold' }}>Team Leader</Text>
                <Text>
                  Individual Team Member Reports .............................
                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                  Every Team Leader in Turn
                </Text>
              </View>

              <View style={styles.container}>
                <Text
                  style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}
                >
                  Health Goal
                </Text>
                <Text style={{ fontSize: 14, color: '#000', marginLeft: 10 }}>
                  1. <Text style={{ fontWeight: 'bold' }}>Report.</Text> Review
                  with the team your HEALTH GOAL and last week’s NEXT STEP GOAL
                  and ACTIONS you committed to take. {'\n'}
                  2. <Text style={{ fontWeight: 'bold' }}>Review.</Text> Share
                  actual results from your work last week.{'\n'}
                  3. <Text style={{ fontWeight: 'bold' }}>Synergize</Text> Share
                  your thoughts with your team about what you’ve learned, how
                  you intend to close the gap between where you are and where
                  you want to be, and invite ideas and suggestions from the
                  team. This is the time for team support, sharing of experience
                  and best ideas, and synergy. Remember, this is not just to be
                  a conversation between the team member and the leader, but
                  rather for engagement with and between team members.{'\n'}
                  4. <Text style={{ fontWeight: 'bold' }}>Commit.</Text> Commit
                  to your team the NEXT STEP GOAL and most important ACTIONS
                  you’ll take in the coming week toward achieving your health
                  goal. Be sure to update in the Health Goals area of your
                  Dashboard Success Compass any ACTIONS for the coming week you
                  feel to modify based on your discussion with the team.
                </Text>

                <Text
                  style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}
                >
                  Business Goal
                </Text>
                <Text style={{ fontSize: 14, color: '#000', marginLeft: 10 }}>
                  1. <Text style={{ fontWeight: 'bold' }}>Report.</Text> Review
                  with the team your BUSINESS GOAL and last week’s NEXT STEP
                  GOAL and ACTIONS you committed to take.{'\n'}
                  2. <Text style={{ fontWeight: 'bold' }}>Review.</Text> Share
                  actual results from your work last week.{'\n'}
                  3. <Text style={{ fontWeight: 'bold' }}>Synergize</Text> Share
                  your thoughts with your team about what you’ve learned, how
                  you intend to close the gap between where you are and where
                  you want to be, and invite ideas and suggestions from the
                  team. This is the time for team support, sharing of experience
                  and best ideas, and synergy.{'\n'}
                  4. <Text style={{ fontWeight: 'bold' }}>Commit.</Text> Commit
                  to your team the NEXT STEP GOAL and most important ACTIONS
                  you’ll take in the coming week to move your business forward.
                  Be sure to update in the Business Goals area of your Dashboard
                  Success Compass any ACTIONS for the coming week you feel to
                  modify based on your discussion with the team.
                </Text>
              </View>
              <View style={styles.container}>
                <Text>
                  Open Discussion and Q&A......................................
                  <Text style={{ fontWeight: 'bold' }}>Team</Text>
                </Text>
                <Text>
                  Review Upcoming Calendar Events ......
                  <Text style={{ fontWeight: 'bold' }}>Team Members</Text>
                </Text>
                <Text>
                  AdjournTeam .............................................
                  <Text style={{ fontWeight: 'bold' }}>Team Leaders</Text>
                </Text>
              </View>

              <Text
                style={{
                  paddingTop: 30,
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#000',
                }}
              >
                Attending Members Business Commitments
              </Text>
              <View>
                <ScrollView
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  alwaysBounceVertical={true}
                >
                  <View>{this.renderTableHeader()}</View>
                </ScrollView>
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
  imageStyle: {
    height: 200,
    width: 350,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  tableHeader: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  listText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
    paddingBottom: 5,
  },
})

const mapStateToProps = state => ({
  members: state.dashboard.membersCommitment,
  sponsored: state.dashboard.sponsoredList,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMemberCommitment,
      getSponsoredList,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeeklyMeetingOutline)
