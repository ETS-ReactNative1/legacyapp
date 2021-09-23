/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-native-modal'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Calendar } from 'react-native-calendars'
import {
  AppHeader,
  ListItemContainer,
  Card,
  CheckBox,
  Input,
  Button,
  FormInline,
} from '@/Components'

import {
  addBusinessGoal,
  getBusinessGoal,
  addNextStepGoal,
  getNextStepGoal,
  getWeeklyActions,
} from './Actions'

var { height, width } = Dimensions.get('window')

class SCBusinessGoal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormBGVisible: false,
      isDateTimePickerVisible: false,
      goalText: '',
      byWhen: moment().format('MMM DD, YYYY'),
      options: ['', '', '', ''],
      isFormNGVisible: false,
      goalTextNSG: '',
      isFormResultVisible: false,
      result: '',
      isActionFormVisible: false,
      newTextAction: '',
      isSunday: false,
      isMonday: false,
      isTuesday: false,
      isWednesday: false,
      isThursday: false,
      isFriday: false,
      isSaturday: false,
      isShowCalendar: false,
      selectedDayOfTheWeek: new Date(),
    }
  }

  componentDidMount() {
    this.props.getBusinessGoal('business')
    this.props.getNextStepGoal('business')
    this.props.getWeeklyActions('business')
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true })
  }

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false })
  }

  handleDatePicked = date => {
    this.setState({ byWhen: moment(date).format('MMM DD, YYYY') })
    this.hideDateTimePicker()
  }

  onAddOption = (type, text) => {
    let $option = this.state.options
    switch (type) {
      case 'option1':
        $option[0] = text
        break
      case 'option2':
        $option[1] = text
        break
      case 'option3':
        $option[2] = text
        break
      case 'option4':
        $option[3] = text
        break
      default:
    }
    this.setState({ options: $option })
  }

  onSubmit = () => {
    let payload = {
      type: 'business',
      goal: this.state.goalText,
      due_date: this.state.byWhen,
      purpose: this.state.options,
    }
    console.log(payload)
    this.props.addBusinessGoal(payload)
    this.setState({ isFormBGVisible: false })
  }

  onSubmitNG = () => {
    let payload = {
      type: 'business',
      goal: this.state.goalTextNSG,
      due_date: this.state.byWhen,
    }
    console.log(payload)
    this.props.addNextStepGoal(payload)
    this.setState({ isFormNGVisible: false })
  }

  renderFormBusinessGoal = () => {
    return (
      <Modal isVisible={this.state.isFormBGVisible}>
        <View style={styles.formStyle}>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end' }}
            onPress={() => this.setState({ isFormBGVisible: false })}
          >
            <FontAwesome name="close" color="#CCCCCC" size={30} />
          </TouchableOpacity>
          <ScrollView style={{ flex: 1 }}>
            <FormInline label="Goal">
              <Input
                placeholder="Goal"
                value={this.state.goalText}
                containerStyle={{ marginBottom: 10 }}
                onChangeText={goalText => this.setState({ goalText })}
              />
            </FormInline>
            <TouchableOpacity onPress={this.showDateTimePicker}>
              <FormInline label="By When:">
                <Input
                  editable={false}
                  placeholder="By When"
                  value={this.state.byWhen}
                  containerStyle={{ marginBottom: 10 }}
                  onChangeText={byWhen => this.setState({ byWhen })}
                />
              </FormInline>
            </TouchableOpacity>

            <FormInline label="So that I can:">
              <Input
                placeholder="Option 1"
                value={this.state.options[0]}
                containerStyle={{ marginBottom: 10 }}
                onChangeText={option1 => this.onAddOption('option1', option1)}
              />
              <Input
                placeholder="Option 2"
                value={this.state.options[1]}
                containerStyle={{ marginBottom: 10 }}
                onChangeText={option2 => this.onAddOption('option2', option2)}
              />
              <Input
                placeholder="Option 3"
                value={this.state.options[2]}
                containerStyle={{ marginBottom: 10 }}
                onChangeText={option3 => this.onAddOption('option3', option3)}
              />
              <Input
                placeholder="Option 4"
                value={this.state.options[3]}
                containerStyle={{ marginBottom: 10 }}
                onChangeText={option4 => this.onAddOption('option4', option4)}
              />
            </FormInline>
          </ScrollView>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
          <Button
            type="info"
            textColor="white"
            text="Submit"
            onPress={() => this.onSubmit()}
          />
        </View>
      </Modal>
    )
  }

  renderFormNextStepGoal = () => {
    return (
      <Modal isVisible={this.state.isFormNGVisible}>
        <View style={styles.formStyle}>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end' }}
            onPress={() => this.setState({ isFormNGVisible: false })}
          >
            <FontAwesome name="close" color="#CCCCCC" size={30} />
          </TouchableOpacity>
          <ScrollView style={{ flex: 1 }}>
            <FormInline label="Goal">
              <Input
                placeholder="Goal"
                value={this.state.goalTextNSG}
                containerStyle={{ marginBottom: 10 }}
                onChangeText={goalTextNSG => this.setState({ goalTextNSG })}
              />
            </FormInline>
            <TouchableOpacity onPress={this.showDateTimePicker}>
              <FormInline label="By When:">
                <Input
                  editable={false}
                  placeholder="By When"
                  value={this.state.byWhen}
                  containerStyle={{ marginBottom: 10 }}
                  onChangeText={byWhen => this.setState({ byWhen })}
                />
              </FormInline>
            </TouchableOpacity>
          </ScrollView>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
          <Button
            type="info"
            textColor="white"
            text="Submit"
            onPress={() => this.onSubmitNG()}
          />
        </View>
      </Modal>
    )
  }

  renderFormResult = () => {
    return (
      <Modal isVisible={this.state.isFormResultVisible}>
        <View style={styles.formStyle}>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end' }}
            onPress={() => this.setState({ isFormResultVisible: false })}
          >
            <FontAwesome name="close" color="#CCCCCC" size={30} />
          </TouchableOpacity>
          <ScrollView style={{ flex: 1 }}>
            <FormInline label="Results">
              <TextInput
                placeholder="Result"
                value={this.state.result}
                style={{
                  paddingVertical: 5,
                  borderColor: 'rgba(0,0,0,0.2)',
                  borderWidth: 1,
                  fontSize: 16,
                  borderRadius: 5,
                  paddingLeft: 5,
                  height: 300,
                }}
                multiline={true}
                onChangeText={result => this.setState(result)}
              />
            </FormInline>
          </ScrollView>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
          <Button
            type="info"
            textColor="white"
            text="Submit"
            onPress={() => this.onSubmitNG()}
          />
        </View>
      </Modal>
    )
  }

  renderActionOfTheWeekForm = () => {
    return (
      <Modal
        deviceHeight={height}
        deviceWidth={width}
        style={styles.modalContainer}
        isVisible={this.state.isActionFormVisible}
      >
        <View style={{ flex: 1, paddingTop: 80, paddingHorizontal: 20 }}>
          <FormInline label="Enter new action">
            <Input
              placeholder="Enter new action"
              value={this.state.newTextAction}
              containerStyle={{ marginBottom: 10 }}
              onChangeText={newTextAction => this.setState({ newTextAction })}
            />
          </FormInline>
          <View style={{ paddingVertical: 10 }}>
            <Text style={styles.textStyle}>
              Select which days of this week you will complete this action
            </Text>
          </View>
          <View>
            <CheckBox
              text="Sunday"
              onValueChange={value => this.setState({ isSunday: value })}
              status={this.state.isSunday}
            />
            <CheckBox
              text="Monday"
              onValueChange={value => this.setState({ isMonday: value })}
              status={this.state.isMonday}
            />
            <CheckBox
              text="Tuesday"
              onValueChange={value => this.setState({ isTuesday: value })}
              status={this.state.isTuesday}
            />
            <CheckBox
              text="Wednesday"
              onValueChange={value => this.setState({ isWednesday: value })}
              status={this.state.isWednesday}
            />
            <CheckBox
              text="Thursday"
              onValueChange={value => this.setState({ isThursday: value })}
              status={this.state.isThursday}
            />
            <CheckBox
              text="Friday"
              onValueChange={value => this.setState({ isFriday: value })}
              status={this.state.isFriday}
            />
            <CheckBox
              text="Saturday"
              onValueChange={value => this.setState({ isSaturday: value })}
              status={this.state.isSaturday}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.rightPosition}
          onPress={() => this.setState({ isActionFormVisible: false })}
        >
          <Ionicons name="ios-close" color="black" size={40} />
        </TouchableOpacity>
        <Button
          type="info"
          textColor="white"
          text="Save"
          buttonStyle={{ marginBottom: 20 }}
          onPress={() => {}}
        />
      </Modal>
    )
  }

  renderCalendar = () => {
    return (
      <Modal isVisible={this.state.isShowCalendar}>
        <View style={styles.formStyle}>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end' }}
            onPress={() => this.setState({ isShowCalendar: false })}
          >
            <FontAwesome name="close" color="#CCCCCC" size={30} />
          </TouchableOpacity>
          <Calendar
            minDate={moment().format('YYYY-MM-DD')}
            theme={{
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#AC210F',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#72CDD5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#AC210F',
              arrowColor: '#000',
            }}
            hideExtraDays={false}
            onDayPress={day => {
              this.setState({
                selectedDayOfTheWeek: day.dateString,
                isShowCalendar: false,
              })
            }}
          />
        </View>
      </Modal>
    )
  }

  render() {
    console.log(this.props.successCompass)
    const {
      businessGoals,
      nextStepGoals,
      weeklyActions,
    } = this.props.successCompass
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Success Compass"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />

        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card
            title="Business Goal"
            isShadow={true}
            rightButton="EDIT"
            rightButtonStyle={{
              backgroundColor: '#28608F',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
            }}
            rightOnPress={() => this.setState({ isFormBGVisible: true })}
          >
            <View style={styles.textContainer}>
              <ListItemContainer
                status="children"
                color="#0172A1"
                plainBackground={true}
              >
                <Text style={{ fontSize: 17 }}>{businessGoals.goal}</Text>
                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: '#eee',
                    paddingVertical: 5,
                    marginTop: 5,
                  }}
                >
                  <Text style={{ fontSize: 16, marginBottom: 5 }}>
                    So that I can:
                  </Text>
                  {typeof businessGoals.purpose !== 'undefined'
                    ? businessGoals.purpose.data.map((option, key) => {
                        return (
                          <Text
                            key={key}
                            style={{ fontSize: 14, marginBottom: 5 }}
                          >
                            • {option.description}
                          </Text>
                        )
                      })
                    : null}
                </View>
              </ListItemContainer>
              <ListItemContainer
                status="children"
                color="#0172A1"
                plainBackground={true}
              >
                <Text style={{ fontSize: 17 }}>{businessGoals.due_date}</Text>
              </ListItemContainer>
            </View>
          </Card>

          <Card
            title="Next Step Goal"
            isShadow={true}
            rightButton="EDIT"
            rightButtonStyle={{
              backgroundColor: '#28608F',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
            }}
            rightOnPress={() => this.setState({ isFormNGVisible: true })}
          >
            <View style={styles.textContainer}>
              <ListItemContainer
                status="children"
                color="#0172A1"
                plainBackground={true}
              >
                <Text style={{ fontSize: 17 }}>{nextStepGoals.goal}</Text>
              </ListItemContainer>
              <ListItemContainer
                status="children"
                color="#0172A1"
                plainBackground={true}
              >
                <Text style={{ fontSize: 17 }}>{nextStepGoals.due_date}</Text>
              </ListItemContainer>
            </View>

            <View style={{ paddingHorizontal: 15, paddingBottom: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>
                Actions: Week Of
              </Text>
              <TouchableOpacity
                onPress={() => this.setState({ isShowCalendar: true })}
              >
                <ListItemContainer
                  status="children"
                  color="#0172A1"
                  plainBackground={true}
                >
                  <Text style={{ fontSize: 17 }}>
                    {moment(
                      moment(this.state.selectedDayOfTheWeek).startOf('week'),
                    ).format('MMMM DD, YYYY')}
                  </Text>
                </ListItemContainer>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#28608F',
                }}
                onPress={() => this.setState({ isActionFormVisible: true })}
              >
                <Text style={{ fontSize: 14, color: 'white' }}>Action +</Text>
              </TouchableOpacity>
            </View>

            <View style={{ paddingTop: 10 }}>
              <View style={{ paddingHorizontal: 15, paddingBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>
                  Weekly Actions
                </Text>
              </View>
              {weeklyActions.map(res => {
                if (
                  moment(res.week).format('MMMM DD, YYYY') ==
                  moment(
                    moment(this.state.selectedDayOfTheWeek).startOf('week'),
                  ).format('MMMM DD, YYYY')
                ) {
                  return res.weekly_items.data.map((week, id) => {
                    return (
                      <View
                        key={id}
                        style={{ paddingHorizontal: 15, paddingBottom: 10 }}
                      >
                        <ListItemContainer
                          status="children"
                          color="#0172A1"
                          plainBackground={true}
                        >
                          <Text style={{ fontSize: 17 }}>{week.title}</Text>
                        </ListItemContainer>
                        {week.days.data.map((day, dayId) => {
                          return (
                            <View key={dayId}>
                              <CheckBox
                                text={day.day}
                                onValueChange={value => {}}
                                status={true}
                              />
                            </View>
                          )
                        })}
                      </View>
                    )
                  })
                }
              })}
            </View>
          </Card>

          <Card
            title="Results"
            isShadow={true}
            rightButton="EDIT"
            rightButtonStyle={{
              backgroundColor: '#28608F',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
            }}
            rightOnPress={() => this.setState({ isFormResultVisible: true })}
          >
            <View style={styles.textContainer}>
              <ListItemContainer
                status="children"
                color="#0172A1"
                plainBackground={true}
              >
                <Text style={{ fontSize: 17 }}>
                  click on the action ........
                </Text>
              </ListItemContainer>
            </View>
          </Card>
        </ScrollView>
        {this.renderFormBusinessGoal()}
        {this.renderFormNextStepGoal()}
        {this.renderFormResult()}
        {this.renderActionOfTheWeekForm()}
        {this.renderCalendar()}
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
  formStyle: {
    backgroundColor: 'white',
    height: height * 0.8,
    borderRadius: 5,
    padding: 15,
  },
  modalContainer: {
    flex: 1,
    margin: 0,
    backgroundColor: 'white',
  },
  rightPosition: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
})

const mapStateToProps = state => ({
  successCompass: state.dashboard,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addBusinessGoal,
      getBusinessGoal,
      addNextStepGoal,
      getNextStepGoal,
      getWeeklyActions,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(SCBusinessGoal)
