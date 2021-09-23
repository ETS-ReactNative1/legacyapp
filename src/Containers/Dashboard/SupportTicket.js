/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {
  AppHeader,
  Card,
  Input,
  FormInline,
  Button,
  ListItemContainer,
  PickList,
} from '@/Components'
import style from './styles'

const ticketCat = [
  { label: 'General', value: 'General' },
  { label: 'Email Not Received', value: 'Email Not Received' },
  { label: 'Billing Problems', value: 'Billing Problems' },
  { label: 'Dashboard Problems', value: 'Dashboard Problems' },
  {
    label: 'Other Legacy Network Questions',
    value: 'Other Legacy Network Questions',
  },
]

export default class SupportTicket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: '',
      descIssue: '',
      ticketCat: '',
      response: [
        {
          id: 1,
          ticketno: '#21',
          status: 'Open',
          subject: 'test',
          comment: 'No Comment',
          Submitted: '10/10/2018 08:12:23',
          action: 'Closed on: 10/11/2018 12:55:22 pm \n By: Andrew Goodwin',
        },
        {
          id: 2,
          ticketno: '#27',
          status: 'Closed',
          subject: 'test',
          comment: 'No Comment',
          Submitted: '10/10/2018 08:12:23',
          action: 'Closed on: 10/11/2018 12:55:22 pm \n By: Andrew Goodwin',
        },
        {
          id: 3,
          ticketno: '#28',
          status: 'Closed',
          subject: 'test',
          comment: 'No Comment',
          Submitted: '10/10/2018 08:12:23',
          action: 'Closed on: 10/11/2018 12:55:22 pm \n By: Andrew Goodwin',
        },
        {
          id: 4,
          ticketno: '#29',
          status: 'Open',
          subject: 'test',
          comment: 'No Comment',
          Submitted: '10/10/2018 08:12:23',
          action: 'Closed on: 10/11/2018 12:55:22 pm \n By: Andrew Goodwin',
        },
        {
          id: 5,
          ticketno: '#30',
          status: 'Closed',
          subject: 'test',
          comment: 'No Comment',
          Submitted: '10/10/2018 08:12:23',
          action: 'Closed on: 10/11/2018 12:55:22 pm \n By: Andrew Goodwin',
        },
      ],
    }
  }

  resetForm = () => {
    this.setState({ subject: '', descIssue: '', ticketCat: 'General' })
  }

  renderTableHeader = () => {
    return (
      <View>
        <Grid>
          <Col style={{ width: 100 }}>
            <Text style={styles.tableHeader}>Ticket#</Text>
          </Col>
          <Col style={{ width: 100 }}>
            <Text style={styles.tableHeader}>Status</Text>
          </Col>
          <Col style={{ width: 100 }}>
            <Text style={styles.tableHeader}>Subject</Text>
          </Col>
          <Col style={{ width: 150 }}>
            <Text style={styles.tableHeader}>Comments</Text>
          </Col>
          <Col style={{ width: 170 }}>
            <Text style={styles.tableHeader}>Submitted</Text>
          </Col>
          <Col style={{ width: 250 }}>
            <Text style={styles.tableHeader}>Action</Text>
          </Col>
        </Grid>
        <View style={styles.parentHr} />
      </View>
    )
  }

  renderTableRowData = () => {
    return this.state.response.map(result => {
      return (
        <View key={result.id}>
          <Grid>
            <Col style={{ width: 100 }}>
              <Text style={styles.tableRowData}>{result.ticketno}</Text>
            </Col>
            <Col style={{ width: 100 }}>
              <View style={{ paddingRight: 40 }}>
                <Text
                  style={[
                    styles.tableRowData,
                    styles.tableRowStatus,
                    {
                      backgroundColor:
                        result.status === 'Open' ? '#3eca0d' : '#d9534f',
                    },
                  ]}
                >
                  {result.status}
                </Text>
              </View>
            </Col>
            <Col style={{ width: 100 }}>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={[
                    styles.tableRowData,
                    { color: '#337ab7', fontWeight: 'bold' },
                  ]}
                >
                  {result.subject}
                </Text>
              </TouchableOpacity>
            </Col>
            <Col style={{ width: 150 }}>
              <Text style={styles.tableRowData}>{result.comment}</Text>
            </Col>
            <Col style={{ width: 170 }}>
              <Text style={styles.tableRowData}>{result.Submitted}</Text>
            </Col>
            <Col style={{ width: 250 }}>
              <Text style={styles.tableRowData}>{result.action}</Text>
            </Col>
          </Grid>
          <View style={styles.parentHr} />
        </View>
      )
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="Support Tickets"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="Open Support Ticket" isShadow={true}>
            <View style={styles.textContainer}>
              <Input
                placeholder="Type your subject"
                value={this.state.subject}
                onChangeText={subject => this.setState({ subject })}
                containerStyle={{ marginBottom: 10 }}
              />

              <Input
                placeholder="Describe the issue"
                value={this.state.descIssue}
                multiLine={true}
                onChangeText={descIssue => this.setState({ descIssue })}
                containerStyle={{ marginBottom: 10 }}
              />

              <FormInline label="Ticket Category">
                <PickList
                  placeholder={{}}
                  items={ticketCat}
                  value={this.state.ticketCat}
                  onValueChange={value => {
                    this.setState({ ticketCat: value })
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

              <FormInline label="Attachment Image">
                <Button
                  type="info"
                  textColor="white"
                  text="Choose File"
                  onPress={() => {}}
                />
                <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'normal',
                      marginRight: 10,
                    }}
                  >
                    No file chosen
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: 'normal',
                        marginRight: 2,
                      }}
                    >
                      Max Attachment size:
                    </Text>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                      2MB
                    </Text>
                  </View>
                </View>
              </FormInline>

              <View style={[style.bttnRowContainer]}>
                <Button
                  type="danger"
                  textColor="white"
                  text="Reset Form"
                  buttonStyle={{ flex: 1, marginRight: 10 }}
                  onPress={() => {
                    this.resetForm()
                  }}
                />
                <Button
                  type="primaryV2"
                  textColor="white"
                  text="Send Ticket"
                  buttonStyle={{ flex: 1 }}
                  onPress={() => {}}
                />
              </View>

              <View style={styles.container}>
                <ListItemContainer
                  status="children"
                  color="#EFAD4E"
                  plainBackground={false}
                  isBorder={true}
                >
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    If it is a business question or a product question please
                    contact Synergy Worldwide.
                  </Text>
                </ListItemContainer>

                <ListItemContainer
                  status="children"
                  color="#EFAD4E"
                  plainBackground={false}
                  isBorder={true}
                >
                  <Text style={{ fontSize: 15 }}>
                    If you want to upload multiple image files, please put in a
                    archive/zip file. And if the attachment file size too big,
                    you can upload it on a any file hosting and include the link
                    of the file on the description above.
                  </Text>
                </ListItemContainer>
              </View>
            </View>
          </Card>

          <Card title="My Support Tickets" isShadow={true}>
            <View style={styles.tableContainer}>
              <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={true}
                alwaysBounceVertical={true}
              >
                <View style={styles.tableContainer}>
                  {this.renderTableHeader()}
                  {this.renderTableRowData()}
                </View>
              </ScrollView>
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
    color: '#000',
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  tableContainer: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  tableHeader: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  tableRowData: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 13,
    color: '#000',
    textAlign: 'left',
  },
  tableRowStatus: {
    color: '#fff',
    paddingLeft: 10,
    fontWeight: 'bold',
    paddingVertical: 2,
    borderRadius: 4,
  },
  parentHr: {
    marginTop: 10,
    width: '100%',
    borderColor: '#ddd',
    borderBottomWidth: 1,
  },
})
