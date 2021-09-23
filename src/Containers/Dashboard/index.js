/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  ListItemContainer,
  Button,
  AppHeader,
  Card,
  TeamLegacy,
  NodeTreeView,
  CertificationLevel,
} from '@/Components'
import {
  profileRequest,
  getBusinessGoal,
  getNextStepGoal,
  getTeamMembers,
  getAchievementLevels,
  getBonusPath,
  getAdditionalRewards,
  getMemberPlacement,
} from './Actions'
import styles from './styles'

class IndexDashboardContainer extends Component {
  componentDidMount() {
    this.props.profileRequest()
    this.props.getBusinessGoal('business')
    this.props.getNextStepGoal('business')

    this.props.getTeamMembers()
    this.getRewards()
  }

  getRewards = async () => {
    await this.props.getAchievementLevels()
    await this.props.getBonusPath()
    await this.props.getAdditionalRewards()
  }
  render() {
    const {
      businessGoals,
      nextStepGoals,
      profileInfo,
      achievements,
      bonus,
      additionalLevels,
    } = this.props.successCompass
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Dashboard"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="My Commitments" isShadow={true}>
            <View style={styles.cardPadding}>
              <View style={styles.bttnRowContainer}>
                <Button
                  type="info"
                  textColor="white"
                  text="Business Goal"
                  buttonStyle={{ flex: 1, marginRight: 10 }}
                  onPress={() => {}}
                />
                <Button
                  type="info"
                  textColor="white"
                  text="Health Goal"
                  buttonStyle={{ flex: 1 }}
                  onPress={() => {}}
                />
              </View>

              <ListItemContainer color="#78BE7F" plainBackground="#cccccc">
                <View style={{ paddingVertical: 5 }}>
                  <Text style={{ fontSize: 14, marginBottom: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                      Business Goal:{' '}
                    </Text>
                    {businessGoals.goal}
                  </Text>

                  <Text style={{ fontSize: 14 }}>{businessGoals.due_date}</Text>
                </View>
              </ListItemContainer>

              <ListItemContainer color="#78BE7F" plainBackground="#cccccc">
                <View style={{ paddingVertical: 5 }}>
                  <Text style={{ fontSize: 14, marginBottom: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                      Next Goal:{' '}
                    </Text>
                    {nextStepGoals.goal}
                  </Text>

                  <Text style={{ fontSize: 14 }}>{nextStepGoals.due_date}</Text>
                </View>
              </ListItemContainer>
            </View>
          </Card>

          <Card title="Leadership Team Viewer" isShadow={true}>
            <View style={styles.cardPadding}>
              <Text style={styles.details}>
                The Core Team Viewer is a real-time display of your highest
                performing Core Team Members.
              </Text>

              <TeamLegacy bulletColor="#7FC37A" text="Current CV" />
              <TeamLegacy bulletColor="#347AB7" text="Last Month's Total CV" />
              <NodeTreeView />
            </View>
          </Card>

          <Card title="My Achievement Path">
            <View style={{ padding: 15 }}>
              <Text>
                As you reach the benchmarks outlined, you will be rewarded and
                recognized for your outstanding performance!
              </Text>
            </View>
            <View style={styles.containerPadding}>
              {achievements.map((res, id) => {
                return (
                  <CertificationLevel
                    key={`achievement${id}`}
                    title={res.name}
                    buttonText={
                      res.level <= profileInfo.achievement_level
                        ? 'Achieved'
                        : ''
                    }
                    rightButton={[
                      styles.buttonContainer,
                      { backgroundColor: '#5CB85C', padding: 3 },
                    ]}
                    number={res.level}
                    qualificationText={res.qualification}
                    awardText={res.reward}
                  />
                )
              })}
            </View>
          </Card>

          <Card title="My Bonus Path">
            <View style={{ padding: 15 }}>
              <Text>
                Earn $5,500 of additional bonuses by mentoring your group and
                helping your personally sponsored members advance through the
                business plan.
              </Text>
            </View>

            <View style={styles.containerPadding}>
              {bonus.map((res, id) => {
                return (
                  <CertificationLevel
                    key={`bonus${id}`}
                    title={res.name}
                    buttonText="I qualify - Pay me now!"
                    rightButton={[
                      styles.buttonContainer,
                      { backgroundColor: '#347AB7', padding: 3 },
                    ]}
                    qualificationText={res.qualification}
                    recognitionText={res.reward}
                    awardText={res.income}
                  />
                )
              })}
            </View>
          </Card>

          <Card title="Additional Awards">
            <View style={{ padding: 15 }}>
              <Text>
                Earn these prestigious awards as you maximize your leadership
                legacy with Legacy Network!
              </Text>
            </View>

            <View style={styles.containerPadding}>
              {additionalLevels.map((res, id) => {
                return (
                  <CertificationLevel
                    key={`additional${id}`}
                    title={res.name}
                    buttonText="I am qualified"
                    rightButton={[
                      styles.buttonContainer,
                      { backgroundColor: '#5BC0DE', padding: 3 },
                    ]}
                    number="0"
                    qualificationText={res.qualification}
                    recognitionText={res.reward}
                  />
                )
              })}
            </View>
          </Card>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  successCompass: state.dashboard,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      profileRequest,
      getBusinessGoal,
      getNextStepGoal,
      getAchievementLevels,
      getBonusPath,
      getAdditionalRewards,
      getMemberPlacement,
      getTeamMembers,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndexDashboardContainer)
