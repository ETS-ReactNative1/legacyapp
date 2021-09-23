/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
} from 'react-native'
import Hyperlink from 'react-native-hyperlink'
import { AppHeader, Card } from '@/Components'
import Ionicons from 'react-native-vector-icons/Ionicons'

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

export default class MemberCertificationActivation extends Component {
  constructor(props) {
    super(props)
  }

  linkURL = () => {
    return 'http://dev.legacynetwork.com/files/Printed_Doc_linked_to_email_to_Sponsor_when_Member_requests_certification_2019-09-01.pdf'
  }

  goToURL = () => {
    Linking.openURL(
      'http://dev.legacynetwork.com/files/Printed_Doc_linked_to_email_to_Sponsor_when_Member_requests_certification_2019-09-01.pdf',
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Certification Meeting Outline"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Certification Meeting" isShadow={true}>
            <View style={styles.textContainer}>
              <View style={{ paddingVertical: 10 }}>
                <Text style={{ fontSize: 16 }}>
                  Hosting a Team Member Certification Meeting shows that your
                  business is growing! This means you have a new member who is
                  ready to start building their business and needs to become
                  certified so that their business tools can be activated. Well
                  done! {'\n \n'}
                  As you learned from your Entrepreneurship Training, as soon as
                  your new Team Member has completed their Entrepreneurship
                  Training and practiced the skills they’ve learned, it will be
                  time for you to lead their Certification Training Meeting. As
                  their Sponsor, you play a central role in helping your new
                  member complete this special certification process. {'\n \n'}
                  Remember, you are your new member’s life-line, along with the
                  other Support Team Members who are participating with you.
                  Your most important job (as well as the entire Support Team’s
                  job) is to put your new member at ease. It is up to you to
                  make sure your new member feels welcome, a part of the team
                  and feels safe as they demonstrate the skills they have
                  practiced. The better YOU are at making your Team Member feel
                  confident, safe, and important, the better they will be at
                  performing the skills they have worked so hard at perfecting.
                  Setting this tone and providing this kind of environment
                  during the meeting is your responsibility, so be the best
                  sponsor you can be! {'\n'}
                </Text>

                <Hyperlink
                  onPress={() => {
                    this.goToURL()
                  }}
                  linkStyle={{ color: '#2980b9', fontSize: 16 }}
                  linkText={url =>
                    url === this.linkURL() ? 'click here' : url
                  }
                >
                  <Text style={{ fontSize: 16 }}>
                    As you review the agenda below, you will see that you will
                    serve as the Team Leader of this meeting. Follow the flow of
                    this meeting as outlined and prepare yourself so you can
                    lead this meeting with confidence. To print this outline,{' '}
                    {' ' + this.linkURL()}. {'\n \n'}
                  </Text>
                </Hyperlink>

                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  Host Pre-Meeting Preparation
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 10 }}>
                  1. Reach out to your new member to congratulate them on
                  completing their Entrepreneurship Training and preparing to be
                  certified. Be sure they have completed all the items to be
                  reviewed in the Certification Meeting (see agenda below).
                  Encourage them to review the Certification Meeting Outline on
                  Page 49 of their Entrepreneurship Training Workbook as part of
                  their final preparation. {'\n \n'}
                  2. Schedule the online video meeting in Zoom or another
                  service of your choice and send a calendar appointment to your
                  team member. Be sure to include the connection information in
                  your calendar invite. {'\n \n'}
                  3. Think through who on your team or in your up-line network
                  of leaders would lend great support and insight to your team
                  member’s certification experience and include them in your
                  calendar appointment as well. If you feel strongly about
                  someone joining the Certification Meeting as part of the
                  Support Team, you may even want to give them a call and extend
                  a personal invitation and let them know what a difference it
                  would make if they would join. {'\n \n'}
                  4. On the day of the Certification Meeting, send a reminder
                  text to everyone who will participate in the meeting. Review
                  the agenda before the call so it is fresh in you mind.
                  Initiate the web video meeting 10 minutes before the start
                  time so you are first in the meeting room and can warmly
                  welcome and chat with team members as they come on. {'\n \n'}
                  5. Enjoy the meeting and do your best to make it a great
                  experience for all. {'\n \n'}
                </Text>

                <Text style={{ fontSize: 16 }}>
                  Welcome
                  .................................................................{' '}
                  {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>Team Leader {'\n'}</Text>
                  Introduction of New Member ................................{' '}
                  {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>New Member {'\n'}</Text>
                  Introduction of Support Team ...............................{' '}
                  {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>
                    Support Team, in turn {'\n'}
                  </Text>
                  Review Purpose of Certification ............................{' '}
                  {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>Team Leader {'\n'}</Text>
                  Review Health and Business Income Goals and Dates
                  .......................................................................{' '}
                  {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>New Member {'\n'}</Text>
                  Review Next Step Goals and Actions for Coming Week
                  ........................................................................{' '}
                  {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>New Member {'\n'}</Text>
                  Review of Names of Potential Customers and Team Members
                  ...................................................... {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>New Member {'\n'}</Text>
                  Role Play: Potential Customer Conversation
                  ..........................................................{' '}
                  {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>
                    New Member & Team Member {'\n'}
                  </Text>
                  Role Play: Potential Team Member Conversation
                  ..........................................................{' '}
                  {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>
                    New Member & Team Member {'\n'}
                  </Text>
                  Team Feedback
                  ..................................................... {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>
                    Support Team {'\n'}
                  </Text>
                  Share Understanding of Websites and Dashboard
                  .............................................................{' '}
                  {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>New Member {'\n'}</Text>
                  Call to Action and Congratulations
                  .................................................... {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>
                    Team Leader & Support Team {'\n'}
                  </Text>
                  Confirm Next Team Meeting Date & Time and Adjourn
                  ..................................................................{' '}
                  {'\n'}
                  <Text style={{ fontWeight: 'bold' }}>Team Leader {'\n'}</Text>
                </Text>
              </View>

              <Image
                source={require('./Assets/people_heart.png')}
                style={styles.imageStyle}
              />

              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Welcome and Introductions
              </Text>
              <Text style={{ fontSize: 16 }}>
                After you welcome all those attending the meeting, introduce the
                new member and let them tell a little about themselves. Then
                invite the other Support Team Members to introduce themselves,
                in turn, so everyone can get to know each other. {'\n'}
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Purpose of Certification
              </Text>
              <Text style={{ fontSize: 16 }}>
                The purpose of a certification meeting is to 1) build a
                relationship between the new member and their Support Team, and
                2) ensure each new member is ready to start building their
                business by having them demonstrate they can naturally,
                accurately and confidently ask questions and use the Elite
                Health Challenge and Elite Business Challenge page storylines to
                contact and converse with those on their list, and invite them
                to start the Challenge or join their team in building a
                business. {'\n'}
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Review Health and Business Income Goals and Dates
              </Text>
              <Text style={{ fontSize: 16 }}>
                Invite your new member to share their Health Goal and Business
                Income Goal, the dates by which they would like to achieve them,
                and the difference it will make in their lives when they reach
                their goals. {'\n'}
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Review Next Step Goals and Actions for Coming Week
              </Text>
              <Text style={{ fontSize: 16 }}>
                Here your new member will share their Next Step Goal for their
                Health Goal and Income Goal and the Actions they are committed
                to take in the coming week to achieve them. The Support Team
                should offer encouragement and congratulations on their goals,
                along with any suggestions or feedback. {'\n'}
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Review of Names of Potential Customers and Team Members
              </Text>
              <Text style={{ fontSize: 16 }}>
                Now it is time to have your new member share the Top 5 Names on
                both their Potential Customer List and their Potential Team
                Member List (10 names total). Have them also share what it is
                about them that led your new member to choose them. {'\n'}
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Role Plays: Potential Customer and Potential Team Member
                Conversation, with Team Feedback & Congratulations
              </Text>
              <Text style={{ fontSize: 16 }}>
                Next, invite your new member to engage in a role play to
                illustrate the conversation they will have with one name on each
                of their Potential Customer and Potential Team Member Lists.
                Your new member may choose who they would like to play the role
                of the potential customer and the potential team member in the
                role plays. Have them be sure to use the questions, listen, and
                use the storyline if each website for their conversations. If
                your new member feels some initial jitters, don’t worry, that’s
                natural. Assure them that they are safe and in good hands and
                that you, too, felt awkward at this stage when you were getting
                certified. Let them know you and all the Support Team members
                are happy to be there to cheer them on. Invite your new member
                to repeat this process until they feel comfortable and relaxed.
                This will be such a great moment for them. Help them take a deep
                breath and encourage them to just be themselves. Ask the Support
                Team for feedback and helpful hints as they try again. {'\n \n'}
                Repeat this process to confirm your new member knows the
                features and content of both websites and their Dashboard and
                feels comfortable using the information to answer questions.{' '}
                {'\n'}
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Call to Action
              </Text>
              <Text style={{ fontSize: 16 }}>
                Help your new member select two contacts from their lists that
                they want to engage with first. Recommend that they start with
                the 3rd and 4th names on their lists, as this lets them polish
                their invitation with these individuals and saves their best
                invitation for the 1st and 2nd people! Remind your new member
                that their goal is to enroll two customers and two members in
                the next two weeks, so they should get started quickly! Also, if
                they don’t get the response they desire, encourage them to reach
                out to you immediately so you can help role-play and refine
                their skills so they can try again. It is your responsibility to
                take these steps with your new member. Let them know you are
                standing by in case they need assistance. This is where the
                rubber meets the road—it is up to you to support and help your
                people succeed. {'\n'}
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Congratulate New Member
              </Text>
              <Text style={{ fontSize: 16 }}>
                Congratulate your new member for their great work. This is a big
                deal and let them know you recognize it! Reaffirm that you—and
                their entire Support Team—will be there to walk with them side
                by side as they move forward. {'\n'}
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Confirm Next Team Meeting & Adjourn
              </Text>
              <Text style={{ fontSize: 16 }}>
                Thank each member for participating, confirm date and time of
                new Members next Team Meeting (the one YOU are leading) and
                adjourn. {'\n'}
              </Text>

              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Activate New Team Member
              </Text>
              <Text style={{ fontSize: 16 }}>
                Go to the Member Activation menu item in your Dashboard and
                click on the “Activate” button next to the new members name and
                their business tools will become active.
              </Text>
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
    height: 100,
    width: 200,
    resizeMode: 'contain',
    marginBottom: 10,
    alignSelf: 'center',
  },
})
