/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import {
  AppHeader,
  Card,
  FormInline,
  Input,
  Button,
  PickList,
} from '@/Components'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePersonalDetails, profileRequest } from './Actions'

const { width, height } = Dimensions.get('window')

const listState = [
  { label: 'Select State', value: 'Select State' },
  { label: 'US', value: 'US' },
  { label: 'Canada', value: 'Canada' },
]

const listCountry = [
  // US
  { label: 'Select Country', value: 'Select Country' },
  { label: 'Alabama', value: 'Alabama' },
  { label: 'Alaska', value: 'Alaska' },
  { label: 'American Samoa', value: 'American Samoa' },
  { label: 'Arizona', value: 'Arizona' },
  { label: 'Arkansas', value: 'Arkansas' },
  { label: 'Army Base', value: 'Army Base' },
  { label: 'California', value: 'California' },
  { label: 'Colorado', value: 'Colorado' },
  { label: 'Connecticut', value: 'Connecticut' },
  { label: 'Delaware', value: 'Delaware' },
  { label: 'Florida', value: 'Florida' },
  { label: 'Georgia', value: 'Georgia' },
  { label: 'Guam', value: 'Guam' },
  { label: 'Idaho', value: 'Idaho' },
  { label: 'Illinois', value: 'Illinois' },
  { label: 'Indiana', value: 'Indiana' },
  { label: 'Iowa', value: 'Iowa' },
  { label: 'Kansas', value: 'Kansas' },
  { label: 'Kentucky', value: 'Kentucky' },
  { label: 'Louisiana', value: 'Louisiana' },
  { label: 'Maine', value: 'Maine' },
  { label: 'Marianna Islands', value: 'Marianna Islands' },
  { label: 'Maryland', value: 'Maryland' },
  { label: 'Massachusetts', value: 'Massachusetts' },
  { label: 'Michigan', value: 'Michigan' },
  { label: 'Military Base', value: 'Military Base' },
  { label: 'Minnesota', value: 'Minnesota' },
  { label: 'Mississippi', value: 'Mississippi' },
  { label: 'Missouri', value: 'Missouri' },
  { label: 'Montana', value: 'Montana' },
  { label: 'Nebraska', value: 'Nebraska' },
  { label: 'Nevada', value: 'Nevada' },
  { label: 'New Hampshire', value: 'New Hampshire' },
  { label: 'New Jersey', value: 'New Jersey' },
  { label: 'New Mexico', value: 'New Mexico' },
  { label: 'New York', value: 'New York' },
  { label: 'North Carolina', value: 'North Carolina' },
  { label: 'North Dakota', value: 'North Dakota' },
  { label: 'Ohio', value: 'Ohio' },
  { label: 'Oklahoma', value: 'Oklahoma' },
  { label: 'Oregon', value: 'Oregon' },
  { label: 'Pennsylvania', value: 'Pennsylvania' },
  { label: 'Puerto Rico', value: 'Puerto Rico' },
  { label: 'Rhode Island', value: 'Rhode Island' },
  { label: 'South Carolina', value: 'South Carolina' },
  { label: 'South Dakota', value: 'South Dakota' },
  { label: 'Tennessee', value: 'Tennessee' },
  { label: 'Texas', value: 'Texas' },
  { label: 'Utah', value: 'Utah' },
  { label: 'Vermont', value: 'Vermont' },
  { label: 'Virgin Islands', value: 'Virgin Islands' },
  { label: 'Virginia', value: 'Virginia' },
  { label: 'Washington', value: 'Washington' },
  { label: 'Washington Dc', value: 'Washington Dc' },
  { label: 'West Virginia', value: 'West Virginia' },
  { label: 'Wisconsin', value: 'Wisconsin' },
  { label: 'Wyoming', value: 'Wyoming' },
  // Canada
  { label: 'Alberta', value: 'Alberta' },
  { label: 'Brit Columbia', value: 'Brit Columbia' },
  { label: 'Manitoba', value: 'Manitoba' },
  { label: 'New Brunswick', value: 'New Brunswick' },
  { label: 'Newfoundland', value: 'Newfoundland' },
  { label: 'Nova Scotia', value: 'Nova Scotia' },
  { label: 'Nunavut', value: 'Nunavut' },
  { label: 'Nw Territories', value: 'Nw Territories' },
  { label: 'Ontario', value: 'Ontario' },
  { label: 'Prince Ed Islnd', value: 'Prince Ed Islnd' },
  { label: 'Quebec', value: 'Quebec' },
  { label: 'Saskatchewan', value: 'Saskatchewan' },
  { label: 'Yukon Territory', value: 'Yukon Territory' },
]

class EditPersonalDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birth: moment().format('YYYY-MMM-DD'),
      isDateTimePickerVisible: false,
      distributorName: '',
      sponsor: '',
      custId: '3',
      mailingAddressOne: '',
      mailingAddressTwo: '',
      mailingCity: '',
      mailingPostalCode: '',
      shippingAddressOne: '',
      shippingAddressTwo: '',
      shippingCity: '',
      shippingPostalCode: '',
    }
  }

  componentDidMount() {
    const { profileInfo } = this.props.personalDetails
    this.setState({
      firstName: profileInfo.first_name,
      lastName: profileInfo.last_name,
      email: profileInfo.email,
      phone: profileInfo.mobile,
      birth: moment(profileInfo.date_of_birth).format('YYYY-MM-DD'),
      distributorName: '',
      sponsor: '',
      custId: profileInfo.id,
      mailingAddressOne: profileInfo.mailing_address_1,
      mailingAddressTwo: profileInfo.mailing_address_2,
      mailingCity: profileInfo.mailing_city,
      mailingPostalCode: profileInfo.mailing_postal_code,
      shippingAddressOne: profileInfo.physical_address_1,
      shippingAddressTwo: profileInfo.physical_address_2,
      shippingCity: profileInfo.physical_city,
      shippingPostalCode: profileInfo.physical_postal_code,
    })
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true })
  }

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false })
  }

  handleDatePicked = date => {
    this.setState({ birth: moment(date).format('MMM DD, YYYY') })
    this.hideDateTimePicker()
  }

  onUpdatePersondalDetail = () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      birth,
      distributorName,
      sponsor,
      mailingAddressOne,
      mailingAddressTwo,
      mailingCity,
      mailingPostalCode,
      shippingAddressOne,
      shippingAddressTwo,
      shippingCity,
      shippingPostalCode,
    } = this.state

    let params = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile: phone,
      date_of_birth: birth,
      mailing_address_1: mailingAddressOne,
      mailing_address_2: mailingAddressTwo,
      mailing_city: mailingCity,
      mailing_state: '',
      mailing_country: '',
      mailing_postal_code: mailingPostalCode,
      physical_address_1: shippingAddressOne,
      physical_address_2: shippingAddressTwo,
      physical_city: shippingCity,
      physical_state: '',
      physical_country: '',
      physical_postal_code: shippingPostalCode,
    }
    this.props.updatePersonalDetails(params)
  }

  render() {
    console.log(this.props.personalDetails.profileInfo)
    const { profileInfo } = this.props.personalDetails
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Edit Personal Details"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Edit Personal Details" isShadow={true}>
            <View style={styles.wrapperContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../Assets/Images/profile.png')}
                />
              </View>

              <View style={{ marginBottom: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {profileInfo.first_name} {`${profileInfo.last_name}'s`}{' '}
                  Profile
                </Text>
              </View>

              <View>
                <Button
                  type="primaryV2"
                  textColor="White"
                  text="Upload Photo"
                  buttonStyle={{ flex: 1, marginBottom: 20 }}
                  onPress={() => {}}
                />
              </View>
            </View>
            <View style={styles.wrapperContainer}>
              <Text style={styles.labelStyle}>Member Details</Text>
              <FormInline label="First Name">
                <Input
                  placeholder={this.state.firstName}
                  value={this.state.firstName}
                  onChangeText={firstName => this.setState({ firstName })}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>

              <FormInline label="Last Name">
                <Input
                  placeholder={this.state.lastName}
                  value={this.state.lastName}
                  onChangeText={lastName => this.setState({ lastName })}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>

              <FormInline label="Email Address">
                <Input
                  placeholder={this.state.email}
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>

              <FormInline label="Phone/Mobile">
                <Input
                  placeholder={this.state.phone}
                  value={this.state.phone}
                  onChangeText={phone => this.setState({ phone })}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>

              <FormInline label="Date of Birth">
                <TouchableOpacity onPress={this.showDateTimePicker}>
                  <Input
                    editable={false}
                    placeholder={this.state.birth}
                    value={this.state.birth}
                    onChangeText={birth => this.setState({ birth })}
                    containerStyle={{ marginBottom: 10 }}
                  />
                </TouchableOpacity>
              </FormInline>

              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
              />
            </View>

            <View style={styles.wrapperContainer}>
              <Text style={styles.labelStyle}>Distributor Information</Text>
              <FormInline label="Name">
                <Input
                  placeholder="Andrew Goodwin"
                  value={this.state.distributorName}
                  multiLine={true}
                  onChangeText={distributorName =>
                    this.setState({ distributorName })
                  }
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>

              <FormInline label="Sponsor">
                <Text style={{}}>{this.state.sponsor}</Text>
              </FormInline>

              <FormInline label="Customer ID">
                <Text style={{}}>{this.state.custId}</Text>
              </FormInline>
            </View>

            <View style={styles.wrapperContainer}>
              <Text style={styles.labelStyle}>Mailing Address</Text>
              <FormInline label="Address">
                <Input
                  placeholder={this.state.mailingAddressOne}
                  value={this.state.mailingAddressOne}
                  multiLine={true}
                  onChangeText={mailingAddressOne =>
                    this.setState({ mailingAddressOne })
                  }
                  containerStyle={{ marginBottom: 10 }}
                />

                <Input
                  placeholder={this.state.mailingAddressTwo}
                  value={this.state.mailingAddressTwo}
                  multiLine={true}
                  onChangeText={mailingAddressTwo =>
                    this.setState({ mailingAddressTwo })
                  }
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>

              <FormInline label="City">
                <Input
                  placeholder={this.state.mailingCity}
                  value={this.state.mailingCity}
                  onChangeText={mailingCity => this.setState({ mailingCity })}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>

              <FormInline label="State">
                <PickList
                  placeholder={{}}
                  items={listState}
                  value={this.state.listState}
                  onValueChange={value => {
                    this.setState({ state: value })
                  }}
                  containerStyle={{
                    marginBottom: 0,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                  }}
                />
              </FormInline>

              <FormInline label="Country">
                <PickList
                  placeholder={{}}
                  items={listCountry}
                  value={this.state.listCountry}
                  onValueChange={value => {
                    this.setState({ country: value })
                  }}
                  containerStyle={{
                    marginBottom: 0,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                  }}
                />
              </FormInline>

              <FormInline label="Postal Code">
                <Input
                  placeholder={this.state.mailingPostalCode}
                  value={this.state.mailingPostalCode}
                  keyboardType={'numeric'}
                  onChangeText={mailingPostalCode =>
                    this.setState({ mailingPostalCode })
                  }
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>
            </View>

            <View style={styles.wrapperContainer}>
              <Text style={styles.labelStyle}>Shipping Address</Text>
              <FormInline label="Address">
                <Input
                  placeholder={this.state.shippingAddressOne}
                  value={this.state.shippingAddressOne}
                  multiLine={true}
                  onChangeText={shippingAddressOne =>
                    this.setState({ shippingAddressOne })
                  }
                  containerStyle={{ marginBottom: 10 }}
                />

                <Input
                  placeholder={this.state.shippingAddressTwo}
                  value={this.state.shippingAddressTwo}
                  multiLine={true}
                  onChangeText={shippingAddressTwo =>
                    this.setState({ shippingAddressTwo })
                  }
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>

              <FormInline label="City">
                <Input
                  placeholder={this.state.shippingCity}
                  value={this.state.shippingCity}
                  onChangeText={shippingCity => this.setState({ shippingCity })}
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>

              <FormInline label="State">
                <PickList
                  placeholder={{}}
                  items={listState}
                  value={this.state.listState}
                  onValueChange={value => {
                    this.setState({ state: value })
                  }}
                  containerStyle={{
                    marginBottom: 0,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                  }}
                />
              </FormInline>

              <FormInline label="Country">
                <PickList
                  placeholder={{}}
                  items={listCountry}
                  value={this.state.listCountry}
                  onValueChange={value => {
                    this.setState({ country: value })
                  }}
                  containerStyle={{
                    marginBottom: 0,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                  }}
                />
              </FormInline>

              <FormInline label="Postal Code">
                <Input
                  placeholder={this.state.shippingPostalCode}
                  value={this.state.shippingPostalCode}
                  keyboardType={'numeric'}
                  onChangeText={shippingPostalCode =>
                    this.setState({ shippingPostalCode })
                  }
                  containerStyle={{ marginBottom: 10 }}
                />
              </FormInline>
            </View>

            <View style={styles.wrapperContainer}>
              <Button
                type="primaryV2"
                textColor="White"
                text="Update"
                buttonStyle={{ flex: 1 }}
                onPress={this.onUpdatePersondalDetail}
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
  wrapperContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  textStyle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#337ab7',
    marginBottom: 10,
  },
  imageContainer: {
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: width * 0.9,
    height: 160,
    resizeMode: 'contain',
  },
})

const mapStateToProps = state => ({
  personalDetails: state.dashboard,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updatePersonalDetails, profileRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditPersonalDetails)
