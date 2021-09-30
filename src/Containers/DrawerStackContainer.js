/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  LayoutAnimation,
  Linking,
} from 'react-native'
import {
  IndexDashboardContainer,
  NewMemberPlacementDashboardContainer,
  MemberActivationDashboardContainer,
  MyTeamMembersDashboardContainer,
  EliteHealthChallengeParticipantDashboardContainer,
  ProductsVideoDashboardContainer,
  SendInvitesDashboardContainer,
  MarketingComplianceDashboardContainer,
  EliteHealthChallengeDashboardContainer,
  EHCVideosDashboardContainer,
  BusinessVideosDashboardContainer,
  OrderYourBusinessCardsDashboardContainer,
  SCBusinessGoalDashboardContainer,
  SCHealthGoalDashboardContainer,
  WeeklyMeetingOutlineDashboardContainer,
  MemberCertificationActivationDashboardContainer,
  EntrepreneurshipTrainingDashboardContainer,
  LeadershipLiveDashboardContainer,
  CompensationTutorialDashboardContainer,
  ProductUsageDashboardContainer,
  ProductTestimonialDashboardContainer,
  ProductTrainingDashboardContainer,
  BioMeDashboardContainer,
  ChangePasswordDashboardContainer,
  ChangeAutoshipDashboardContainer,
  EditPersonalDetailsDashboardContainer,
  NotificationDashboardContainer,
  PreviewContactPageDashboardContainer,
  PaymentHistoryDashboardContainer,
  CancelSubscriptionDashboardContainer,
  UpdatePaymentInfoDashboardContainer,
  FAQDashboardContainer,
  TrainingWorkbookDashboardContainer,
  SupportTicketDashboardContainer,
} from '@/Containers'
import { DrawerActions } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Badge } from '@/Components'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = props => {
  const [isShowBusiness, onShowBusiness] = useState(true)
  const [isShowSC, onShowSC] = useState(true)
  const [isShowMeeting, onShowMeeting] = useState(true)
  const [isShowTraining, onShowTraining] = useState(true)
  const [isShowProducts, onShowProducts] = useState(true)
  const [isShowMarketing, onShowMarketing] = useState(true)
  const [isShowSettings, onShowSettings] = useState(true)
  const [isShowDocument, onShowDocument] = useState(true)
  const [isShowTechSupport, onShowTechSupport] = useState(true)
  const [profileInfo, setProfileInfo] = useState({})

  const toggleDrawer = pageTitle => {
    props.navigation.navigate(pageTitle)
    props.navigation.closeDrawer()
  }

  const logout = async () => {
    console.log('here')
    await AsyncStorage.setItem('accessToken', '')
    toggleDrawer('Main')
  }

  const goToURL = pageTitle => {
    switch (pageTitle) {
      case 'Buy Products':
        Linking.openURL(
          'https://7ot4562p.synergyworldwide.com/en-us/shop/productwall;category=All%20Products',
        )
      case 'Pulse':
        Linking.openURL('https://www.synergyworldwide.com/en-us/login/email')
    }
  }

  useEffect(() => {
    AsyncStorage.getItem('profileInfo').then(res => {
      let $res = JSON.parse(res)
      setProfileInfo($res)
    })
  }, [profileInfo])

  LayoutAnimation.easeInEaseOut()

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderBottomWidth: 0.3,
          borderColor: 'white',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 15,
          }}
        >
          <Badge number={profileInfo.achievement_level} />
        </View>
        <View>
          <Text style={[styles.textStyle, { fontWeight: '500' }]}>
            Hello {profileInfo.first_name}
          </Text>
          <Text
            style={[styles.textStyle, { fontWeight: '500', fontSize: 13 }]}
          >{`(Synergy ID# ${profileInfo.synergy_id})`}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => toggleDrawer('Dashboard')}>
        <View style={[styles.drawerItem, { flexDirection: 'row' }]}>
          <Ionicons name="ios-speedometer" size={20} color="white" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.textStyle}>Dashboard</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={[
            styles.drawerItem,
            { backgroundColor: '#343535', flexDirection: 'row' },
          ]}
          onPress={() => onShowBusiness(!isShowBusiness)}
        >
          <Ionicons name="ios-business" size={20} color="white" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.textStyle}>Business Building</Text>
          </View>
          <Ionicons
            name={isShowBusiness ? 'ios-arrow-down' : 'ios-arrow-forward'}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        {isShowBusiness ? (
          <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('NewMemberPlacement')}
            >
              <Text style={styles.textStyle}>New Member Placement</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('MemberActivation')}
            >
              <Text style={styles.textStyle}>Member Activation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('MyTeamMembers')}
            >
              <Text style={styles.textStyle}>My Team Members</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('EliteHealthChallengeParticipant')}
            >
              <Text style={styles.textStyle}>
                My Health Challenge Participants
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => {
                // toggleDrawer(''),
                goToURL('Pulse')
              }}
            >
              <Text style={styles.textStyle}>Pulse</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('MarketingCompliance')}
            >
              <Text style={styles.textStyle}>Marketing Compliance</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <View>
        <TouchableOpacity
          style={[
            styles.drawerItem,
            { backgroundColor: '#343535', flexDirection: 'row' },
          ]}
          onPress={() => onShowMarketing(!isShowMarketing)}
        >
          <Ionicons name="ios-business" size={20} color="white" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.textStyle}>Marketing Tools</Text>
          </View>
          <Ionicons
            name={isShowMarketing ? 'ios-arrow-down' : 'ios-arrow-forward'}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        {isShowMarketing ? (
          <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('SendInvites')}
            >
              <Text style={styles.textStyle}>Send Invites</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('ProductsVideo')}
            >
              <Text style={styles.textStyle}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('EHCVideos')}
            >
              <Text style={styles.textStyle}>Elite Health Challenge</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('BusinessVideos')}
            >
              <Text style={styles.textStyle}>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('OrderYourBusinessCard')}
            >
              <Text style={styles.textStyle}>Order your Business Cards</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <View>
        <TouchableOpacity
          style={[
            styles.drawerItem,
            { backgroundColor: '#343535', flexDirection: 'row' },
          ]}
          onPress={() => onShowSC(!isShowSC)}
        >
          <Ionicons name="ios-business" size={20} color="white" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.textStyle}>Success Compass</Text>
          </View>
          <Ionicons
            name={isShowSC ? 'ios-arrow-down' : 'ios-arrow-forward'}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        {isShowSC ? (
          <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('SCBusinessGoal')}
            >
              <Text style={styles.textStyle}>Business Goal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('SCHealthGoal')}
            >
              <Text style={styles.textStyle}>Health Goal</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      <View>
        <TouchableOpacity
          style={[
            styles.drawerItem,
            { backgroundColor: '#343535', flexDirection: 'row' },
          ]}
          onPress={() => onShowMeeting(!isShowMeeting)}
        >
          <Ionicons name="ios-calendar" size={20} color="white" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.textStyle}>Team Meetings</Text>
          </View>
          <Ionicons
            name={isShowMeeting ? 'ios-arrow-down' : 'ios-arrow-forward'}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        {isShowMeeting ? (
          <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('WeeklyMeetingOutline')}
            >
              <Text style={styles.textStyle}>Weekly Meeting Outline</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('MemberCertificationActivation')}
            >
              <Text style={styles.textStyle}>
                Certification Meeting Outline
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      <View>
        <TouchableOpacity
          style={[
            styles.drawerItem,
            { backgroundColor: '#343535', flexDirection: 'row' },
          ]}
          onPress={() => onShowTraining(!isShowTraining)}
        >
          <Ionicons name="ios-calendar" size={20} color="white" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.textStyle}>Training</Text>
          </View>
          <Ionicons
            name={isShowTraining ? 'ios-arrow-down' : 'ios-arrow-forward'}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        {isShowTraining ? (
          <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('EntrepreneurshipTraining')}
            >
              <Text style={styles.textStyle}>Entrepreneurship Training</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('LeadershipLive')}
            >
              <Text style={styles.textStyle}>Leadership Live</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('CompensationTutorial')}
            >
              <Text style={styles.textStyle}>Compensation Tutorial</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      <View>
        <TouchableOpacity
          style={[
            styles.drawerItem,
            { backgroundColor: '#343535', flexDirection: 'row' },
          ]}
          onPress={() => onShowProducts(!isShowProducts)}
        >
          <Ionicons name="ios-calendar" size={20} color="white" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.textStyle}>Products</Text>
          </View>
          <Ionicons
            name={isShowProducts ? 'ios-arrow-down' : 'ios-arrow-forward'}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        {isShowProducts ? (
          <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('ProductUsage')}
            >
              <Text style={styles.textStyle}>Product Usage</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('ProductTraining')}
            >
              <Text style={styles.textStyle}>Product Training</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('EliteHealthChallenge')}
            >
              <Text style={styles.textStyle}>Elite Health Challenge</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => {
                toggleDrawer(''), goToURL('Buy Products')
              }}
            >
              <Text style={styles.textStyle}>Buy Products</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('ProductTestimonial')}
            >
              <Text style={styles.textStyle}>Product Testimonials</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('ChangeAutoship')}
            >
              <Text style={styles.textStyle}>Change Autoship</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('BioMe')}
            >
              <Text style={styles.textStyle}>Biome Man</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      <View>
        <TouchableOpacity
          style={[
            styles.drawerItem,
            { backgroundColor: '#343535', flexDirection: 'row' },
          ]}
          onPress={() => onShowTraining(!isShowTraining)}
        >
          <Ionicons name="ios-calendar" size={20} color="white" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.textStyle}>Leave a Legacy</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={[
            styles.drawerItem,
            { backgroundColor: '#343535', flexDirection: 'row' },
          ]}
          onPress={() => onShowSettings(!isShowSettings)}
        >
          <Ionicons name="ios-calendar" size={20} color="white" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.textStyle}>Settings & Contact Info</Text>
          </View>
          <Ionicons
            name={isShowSettings ? 'ios-arrow-down' : 'ios-arrow-forward'}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        {isShowSettings ? (
          <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('MyPURL')}
            >
              <Text style={styles.textStyle}>My PURL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('ChangePassword')}
            >
              <Text style={styles.textStyle}>Change my LN Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('EditPersonalDetails')}
            >
              <Text style={styles.textStyle}>Edit Personal Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('PreviewContactPage')}
            >
              <Text style={styles.textStyle}>Preview my Contact Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('Notification')}
            >
              <Text style={styles.textStyle}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('CancelSubscription')}
            >
              <Text style={styles.textStyle}>Cancel My Subscription</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('UpdatePaymentInfo')}
            >
              <Text style={styles.textStyle}>Update Payment Information</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('PaymentHistory')}
            >
              <Text style={styles.textStyle}>Payment History</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      <View>
        <TouchableOpacity
          style={[
            styles.drawerItem,
            { backgroundColor: '#343535', flexDirection: 'row' },
          ]}
          onPress={() => onShowDocument(!isShowDocument)}
        >
          <Ionicons name="ios-calendar" size={20} color="white" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.textStyle}>Document Library</Text>
          </View>
          <Ionicons
            name={isShowDocument ? 'ios-arrow-down' : 'ios-arrow-forward'}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        {isShowDocument ? (
          <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('TrainingWorkbook')}
            >
              <Text style={styles.textStyle}>
                Entrepreneurship Training Workbook
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      <View>
        <TouchableOpacity
          style={[
            styles.drawerItem,
            { backgroundColor: '#343535', flexDirection: 'row' },
          ]}
          onPress={() => onShowTechSupport(!isShowTechSupport)}
        >
          <Ionicons name="ios-calendar" size={20} color="white" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.textStyle}>Tech Support</Text>
          </View>
          <Ionicons
            name={isShowTechSupport ? 'ios-arrow-down' : 'ios-arrow-forward'}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        {isShowTechSupport ? (
          <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('SupportTicket')}
            >
              <Text style={styles.textStyle}>Support Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => toggleDrawer('FAQ')}
            >
              <Text style={styles.textStyle}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => logout()}
            >
              <Text style={styles.textStyle}>Logout</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </ScrollView>
  )
}

// @refresh reset
const DrawerStackContainer = ({ navigation }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#545454',
        },
        drawerStyle: {
          backgroundColor: '#202020',
        },
        headerTintColor: '#fff',
      }}
    >
      <Drawer.Screen name="Dashboard" component={IndexDashboardContainer} />
      <Drawer.Screen
        name="NewMemberPlacement"
        component={NewMemberPlacementDashboardContainer}
      />
      <Drawer.Screen
        name="MemberActivation"
        component={MemberActivationDashboardContainer}
      />
      <Drawer.Screen
        name="MyTeamMembers"
        component={MyTeamMembersDashboardContainer}
      />
      <Drawer.Screen
        name="EliteHealthChallengeParticipant"
        component={EliteHealthChallengeParticipantDashboardContainer}
      />
      <Drawer.Screen
        name="ProductsVideo"
        component={ProductsVideoDashboardContainer}
      />
      <Drawer.Screen
        name="SendInvites"
        component={SendInvitesDashboardContainer}
      />
      <Drawer.Screen
        name="MarketingCompliance"
        component={MarketingComplianceDashboardContainer}
      />
      <Drawer.Screen
        name="EliteHealthChallenge"
        component={EliteHealthChallengeDashboardContainer}
      />
      <Drawer.Screen name="EHCVideos" component={EHCVideosDashboardContainer} />
      <Drawer.Screen
        name="BusinessVideos"
        component={BusinessVideosDashboardContainer}
      />
      <Drawer.Screen
        name="OrderYourBusinessCard"
        component={OrderYourBusinessCardsDashboardContainer}
      />
      <Drawer.Screen
        name="SCBusinessGoal"
        component={SCBusinessGoalDashboardContainer}
      />
      <Drawer.Screen
        name="SCHealthGoal"
        component={SCHealthGoalDashboardContainer}
      />
      <Drawer.Screen
        name="WeeklyMeetingOutline"
        component={WeeklyMeetingOutlineDashboardContainer}
      />
      <Drawer.Screen
        name="MemberCertificationActivation"
        component={MemberCertificationActivationDashboardContainer}
      />
      <Drawer.Screen
        name="EntrepreneurshipTraining"
        component={EntrepreneurshipTrainingDashboardContainer}
      />
      <Drawer.Screen
        name="LeadershipLive"
        component={LeadershipLiveDashboardContainer}
      />
      <Drawer.Screen
        name="CompensationTutorial"
        component={CompensationTutorialDashboardContainer}
      />
      <Drawer.Screen
        name="ProductUsage"
        component={ProductUsageDashboardContainer}
      />
      <Drawer.Screen
        name="ProductTestimonial"
        component={ProductTestimonialDashboardContainer}
      />
      <Drawer.Screen
        name="ProductTraining"
        component={ProductTrainingDashboardContainer}
      />
      <Drawer.Screen name="BioMe" component={BioMeDashboardContainer} />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePasswordDashboardContainer}
      />
      <Drawer.Screen
        name="ChangeAutoship"
        component={ChangeAutoshipDashboardContainer}
      />
      <Drawer.Screen
        name="EditPersonalDetails"
        component={EditPersonalDetailsDashboardContainer}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationDashboardContainer}
      />
      <Drawer.Screen
        name="PreviewContactPage"
        component={PreviewContactPageDashboardContainer}
      />
      <Drawer.Screen
        name="PaymentHistory"
        component={PaymentHistoryDashboardContainer}
      />
      <Drawer.Screen
        name="CancelSubscription"
        component={CancelSubscriptionDashboardContainer}
      />
      <Drawer.Screen
        name="UpdatePaymentInfo"
        component={UpdatePaymentInfoDashboardContainer}
      />
      <Drawer.Screen name="FAQ" component={FAQDashboardContainer} />
      <Drawer.Screen
        name="TrainingWorkbook"
        component={TrainingWorkbookDashboardContainer}
      />
      <Drawer.Screen
        name="SupportTicket"
        component={SupportTicketDashboardContainer}
      />
    </Drawer.Navigator>
  )
}

export default DrawerStackContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
})
