/* eslint-disable no-alert */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native'

import { AppHeader, Card, Button } from '@/Components'

const { width, height } = Dimensions.get('window')

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sendEmail, notifySponsorForCertification } from './Actions'

class EliteHealthChallenge extends Component {
  onSendEmail = () => {
    // this.props.sendEmail().then((res) => {
    //   alert(res.message);
    // })
    this.props.notifySponsorForCertification().then(res => {
      alert(res.message)
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Elite Health Challenge"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="The Elite Health Challenge" isShadow={true}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>
                Please click the Start Now button below to receive all the
                support and communication we provide for the Elite Health
                Challenge which includes; a Welcome Email from Legacy Network,
                the Elite Health Challenge Guidebook, a Food Plan, a Fitness
                Plan and links to a supportive blog and community that will keep
                you going forward day by day!
              </Text>
              <Button
                type="primaryV2"
                textColor="White"
                text="Start Now"
                buttonStyle={{ flex: 1 }}
                onPress={() => this.onSendEmail()}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textHeaderStyle}>
                The Elite Health Challenge Product Package
              </Text>
              <Text style={styles.textStyle}>
                Our 21-day Elite Health Challenge Product Package contains: 2
                Biome Shake, 2 Biome DTX, 1 Mixed Berry ProArgi-9+, 1 E9, 1
                Biome Actives, 1 Biome Balance, 2 Body Prime, and 1 Shaker Cup.
              </Text>
              <Text style={styles.textStyle}>
                This product Pack is SKU# SU94581 and is called the “Legacy
                Biome Kit” on Synergy’s website.
              </Text>
              <Text style={styles.textStyle}>
                Call Customer Service to purchase this kit or simply purchase
                only those products you need to complete the kit and let’s start
                the Challenge together!
              </Text>
              <Image
                style={styles.imageStyle}
                source={{
                  uri:
                    'http://dev.legacynetwork.com/new_images/EHC_Product_Image_for_SuperAdmin.jpg',
                }}
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
  textHeaderStyle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textStyle: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  imageStyle: {
    width: width * 0.9,
    height: 468,
    resizeMode: 'contain',
  },
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendEmail,
      notifySponsorForCertification,
    },
    dispatch,
  )

export default connect(null, mapDispatchToProps)(EliteHealthChallenge)
