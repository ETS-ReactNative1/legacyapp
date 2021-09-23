/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AppHeader, Card } from '@/Components'

export default class EntrepreneurshipTraining extends Component {
  constructor(props) {
    super(props)
    this.state = {
      button: [
        'WELCOME & OVERVIEW',
        'SESSION 1: LEARN',
        'SESSION 2: CONNECT',
        'SESSION 3: IDENTIFY',
        'SESSION 4: SHARE',
        'SESSION 5: ENGAGE AND LEAD',
        'SESSION 6: BUILD',
        'SESSION 7: CERTIFY',
        'SESSION 8: SERVE',
      ],
      follow: [
        '1. Click here now (this action notifies your Sponsor that you are ready for certification).',
        '2. Contact your Sponsor and let them know you are ready to become certified. Together, decide the best time for your Certification Meeting and put it in your calendar (or accept the calendar invite your sponsor will generate for you).',
        '3. Continue refining your skills up until your Certification Meeting.',
        '4. HAVE FUN! This is an exciting time. We are proud of your hard work.',
      ],
      bollitList: [
        'completed each session of the Legacy Network Entrepreneurship Training (watched each session video, completed the corresponding exercises in the Entrepreneurship Training Workbook, and completed each session Task List)',
        'compiled your Team Member Candidate List found in the Entrepreneurship Training Workbook and identified your top 6 candidates (bring this list to your Certification Meeting);',
        'composed your Deconstructed Conversation and Invite in your Entrepreneurship Training Workbook, practiced it thoroughly, and prepared yourself to share it during your Certification Meeting;',
        'thoroughly practiced how to answer the common questions your potential team member may have and prepared yourself to share how you will handle these questions during your Certification Meeting.',
        'set a health goal and the date by which you would like to achieve it. Examples: walk 30 minutes every day for the next 90 days, or lose 15 pounds by May 1, or diligently follow the Purify program for the next 7 days, or run a mile in under 8 minutes by August 1, etc. Be prepared to share it in your Certification Meeting.',
        'set an income goal and the date by which you would like to achieve it. Examples: short term: earn enough to pay from my monthly product order by the end of next month (enroll 2 team members and one customer within 2 weeks and help those team members do the same). Long term: earn $8,000 per month by December 31, etc. Be prepared to share it in your Certification Meeting.',
        'Create a plan of action to achieve your health goal and income goal, including the actions you will take in the next week toward achieving them. Be prepared to share it in your Certification Meeting.',
      ],
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppHeader
          title="Entrepreneurship Training"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />

        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Entrepreneurship Training" isShadow={true}>
            <View style={styles.cardPadding}>
              <Text style={styles.textSize}>
                Welcome to Legacy Network’s Entrepreneurship Training!
              </Text>

              <Text style={[styles.textSize, { marginTop: 5 }]}>
                This training has been designed specifically to empower you as
                you start and build your business. You will be taught
                time-honored principles and skills that will help you succeed
                and to become a great leader in your business.
              </Text>

              <Text style={[styles.textSize, { marginTop: 5 }]}>
                Complete this training by going through each session below.
                Follow the directions within each session and be sure to
                complete each activity you are asked to perform. Be thoughtful
                as you go through this training. Repeat any session(s) you wish
                to reinforce your learning.
              </Text>

              <Text style={[styles.textSize, { marginTop: 5 }]}>
                When you have completed your training, you will have the
                opportunity to review what you have learned with your Support
                Team. When they have certified that you understand and are able
                to apply the concepts taught, your personalized Legacy Network
                Business Tools will be activated and you will be able to begin
                building your business immediately!
              </Text>

              <Text
                style={[styles.textSize, { marginTop: 5, marginBottom: 10 }]}
              >
                To get started, print the Entrepreneurship Training Workbook and
                start your training by watching each companion video below
                beginning with the Welcome & Overview! Follow along in your
                workbook and have fun! We are excited for you!
              </Text>
            </View>

            {this.state.button.map((title, key) => {
              return (
                <View style={styles.buttonContainer} key={key}>
                  <TouchableOpacity>
                    <Text
                      style={[
                        styles.textTitle,
                        { color: '#1A92BB', fontWeight: 'bold' },
                      ]}
                    >
                      {title}
                    </Text>
                  </TouchableOpacity>
                </View>
              )
            })}
            <View style={styles.cardPadding}>
              <Text style={[styles.textTitle, styles.boldText]}>
                Well Done! Now, it’s Time to Certify!
              </Text>
              <Text style={[styles.textSize, { marginTop: 5 }]}>
                Congratulations! You have completed your Entrepreneurship
                Training and are now ready to become certified! To complete your
                certification, you will participate in a Certification Meeting
                with your Sponsor and your Support Team and demonstrate that you
                know how to apply the skills you have learned during this
                training.
              </Text>

              <Text style={[styles.textSize, { marginTop: 5 }]}>
                Again, once you are certified, your Legacy Network Business
                Tools will be activated and you can begin building your
                business!
              </Text>

              <Text
                style={[styles.textTitle, styles.boldText, { marginTop: 10 }]}
              >
                Certification Preparation
              </Text>
              <Text style={[styles.textSize, { marginTop: 5 }]}>
                To complete your certification, you must have:
              </Text>

              {this.state.bollitList.map((list, key) => {
                return (
                  <View style={styles.iconContainer} key={key}>
                    <Icon style={styles.circleIcon} size={5} name="circle" />
                    <Text style={{ fontSize: 15, flex: 1 }}>{list}</Text>
                  </View>
                )
              })}

              <Text style={[styles.textTitle, styles.boldText]}>
                Do This Now:
              </Text>
              <Text>Now that you are prepared, please:</Text>
              {this.state.follow.map((item, key) => {
                return (
                  <View style={{ marginBottom: 2 }} key={key}>
                    <Text style={[styles.textSize, { marginLeft: 15 }]}>
                      {item}
                    </Text>
                  </View>
                )
              })}
            </View>
          </Card>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  textSize: {
    fontSize: 15,
    paddingBottom: 5,
  },
  textTitle: {
    fontSize: 18,
    paddingTop: 5,
  },
  buttonContainer: {
    backgroundColor: '#E7E7E7',
    height: 50,
    paddingLeft: 20,
    justifyContent: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  textContainer: {
    marginTop: 5,
    margin: 7,
  },
  viewLineText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
    borderBottomWidth: 1,
  },
  textSchedule: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  circleIcon: {
    marginTop: 6,
    marginRight: 10,
    marginLeft: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cardPadding: {
    padding: 15,
  },
})
