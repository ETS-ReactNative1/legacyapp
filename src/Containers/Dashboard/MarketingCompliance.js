/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native'
import Hyperlink from 'react-native-hyperlink'
import { AppHeader, Card } from '@/Components'

export default class MarketingCompliance extends Component {
  linkURL = () => {
    return 'https://www.ftc.gov/tips-advice/business-center/guidance/can-spam-act-compliance-guide-business'
  }

  goToURL = () => {
    Linking.openURL(
      'https://www.ftc.gov/tips-advice/business-center/guidance/can-spam-act-compliance-guide-business',
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Marketing Compliance"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Marketing Compliance" isShadow={true}>
            <View style={styles.textContainer}>
              <Text style={{ fontSize: 16 }}>
                To protect the integrity of the Legacy Network marketing system
                and Synergy Worldwide, Legacy Network participants must submit
                ALL personally created marketing pieces and advertisements to
                marketing@legacynetwork.com for legal compliance approval PRIOR
                to use.{'\n'}
                {'\n'}
                Any misrepresentation of Legacy Network will result in IMMEDIATE
                termination of your Legacy Network system and inactivation of
                your PURL. Additionally, the distributor at fault may be held
                legally and financially responsible for whatever actions are
                necessary to correct the indiscretion. Build your business
                within the boundaries of this business model and upon the firm
                foundation which it rests. This is what will ensure longevity.
              </Text>

              <View style={{ paddingVertical: 10 }}>
                <Text style={styles.textStyle}>
                  Legacy Network Anti-Spam Policy
                </Text>
              </View>

              <Hyperlink
                onPress={() => {
                  this.goToURL()
                }}
                linkStyle={{ color: '#2980b9', fontSize: 13 }}
                linkText={url =>
                  url === this.linkURL() ? 'CAN-SPAM ACT Compliance' : url
                }
              >
                <Text style={{ fontSize: 16 }}>
                  Although we invite you to use email to introduce this
                  opportunity to your personal contacts, there are anti-spam
                  laws that must be followed in order to discourage governmental
                  legal action. The definition of spam is the use of electronic
                  messaging (email) to send unsolicited bulk messages
                  indiscriminately. In short, you need to know who you are
                  sending these emails to, and they should be expecting an email
                  from you.{'\n'}
                  {'\n'}
                  Please read our email spam rules and regulations very
                  carefully and visit the {this.linkURL()} page where you will
                  be taken to a short seven point synopsis of the law that
                  clarifies your responsibilities as an advertiser. Legacy
                  Network Team Members that fail to do comply with these email
                  rules and regulations before marketing through email risk
                  having their membership revoked.{'\n'}
                  {'\n'}
                </Text>
              </Hyperlink>

              <Text style={{ fontSize: 16 }}>
                All emails sent that advertise or link to the (1)
                LegacyNetwork.com site or (2) your personalized
                LegacyNetwork.com site are required to stay within these rules:
                {'\n'}
                {'\n'}
              </Text>

              <Text style={{ marginLeft: 15, fontSize: 16 }}>
                1. You are required to follow all rules in the CAN-SPAM ACT.
                {'\n'}
                2. Your message must include your valid physical postal address.
                {'\n'}
                3. No purchased lists. All people you send to MUST HAVE
                CONTACTED YOU DIRECTLY and asked for the information you are
                sending.{'\n'}
                4. The list must be double opt in. This means that the customer
                must request to be added, and then you must send an email asking
                them to confirm the request.{'\n'}
                5. You must include a clear and conspicuous opt out method and
                honor opt-outs promptly.{'\n'}
                6. Include your first and last name prominently in the email.
                {'\n'}
                8. Identify the message as an add. The law gives you a lot of
                leeway in how to do this, but you must disclose clearly and
                conspicuously that your message is an advertisement.{'\n'}
                {'\n'}
              </Text>

              <Text style={{ fontSize: 16 }}>
                Please remember to monitor what others are doing on your behalf
                - those you may hire to assist you and your downline who may
                also be advertising. The law makes it clear that even if you
                hire another company to handle your email marketing, you cannot
                contract away your legal responsibility to comply with the law.
                {'\n'}
                {'\n'}
                Both LegacyNetwork.com and the distributor who is promoting the
                product by sending the email message may be held legally and
                financially responsible.
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
