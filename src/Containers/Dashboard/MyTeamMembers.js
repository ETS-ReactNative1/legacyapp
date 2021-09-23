/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const { width } = Dimensions.get('window')
import { AppHeader, Badge, ListItemContainer, Card } from '@/Components'
import { getTeamMembers } from './Actions'

class MyTeamMembers extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getTeamMembers()
  }

  _copyToClip = () => {}

  render() {
    const { teamMembers } = this.props.teamMembers
    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          title="My Team Members"
          onLeftButtonPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={[styles.container, { backgroundColor: '#eee' }]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={true}
        >
          <Card title="" isShadow={true}>
            <View style={styles.textContainer}>
              <ListItemContainer
                status="children"
                color="#01759D"
                plainBackground={false}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}
                >
                  Team Members
                </Text>
              </ListItemContainer>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {teamMembers.map((res, id) => {
                  return (
                    <View
                      key={id}
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        borderWidth: 0.3,
                        marginRight: 10,
                        marginBottom: 10,
                        width: width / 3 - 30,
                      }}
                    >
                      <View
                        style={{
                          paddingBottom: 10,
                          paddingTop: 5,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Text>{res.first_name}</Text>
                        <Text>{res.last_name}</Text>
                      </View>
                      <Badge
                        number={res.achievement_level_id - 1}
                        containerStyle={{ marginRight: 0 }}
                      />
                    </View>
                  )
                })}
              </View>
              <View>
                <View
                  style={[
                    styles.textContainerContent,
                    { flexDirection: 'row' },
                  ]}
                >
                  <Text style={[styles.textStyle, { flex: 0.5 }]}>Name</Text>
                  <Text
                    style={[
                      styles.textStyle,
                      { flex: 1, alignItems: 'center' },
                    ]}
                  >
                    Email {'\n'}
                    <Text
                      style={{ color: '#2980b9' }}
                      onPress={() => {
                        this._copyToClip()
                      }}
                    >
                      (Copy)
                    </Text>
                  </Text>
                  <Text style={[styles.textStyle, { flex: 0.5 }]}>
                    Phone Number {'\n'}
                    <Text
                      style={{ color: '#2980b9' }}
                      onPress={() => {
                        this._copyToClip()
                      }}
                    >
                      (Copy)
                    </Text>
                  </Text>
                </View>
                {teamMembers.map((res, id) => {
                  return (
                    <View
                      key={id}
                      style={[
                        styles.textContainerContent,
                        { flexDirection: 'row' },
                      ]}
                    >
                      <Text style={[styles.smallTextStyle, { flex: 0.5 }]}>
                        {res.first_name} {res.last_name}
                      </Text>
                      <Text
                        style={[
                          styles.smallTextStyle,
                          {
                            flex: 1,
                            alignItems: 'center',
                            paddingHorizontal: 10,
                          },
                        ]}
                      >
                        {res.email}
                      </Text>
                      <Text style={[styles.smallTextStyle, { flex: 0.5 }]}>
                        {res.mobile}
                      </Text>
                    </View>
                  )
                })}
              </View>

              <View>
                <Text
                  style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}
                >
                  My Customers
                </Text>
              </View>
              <View
                style={[styles.textContainerContent, { flexDirection: 'row' }]}
              >
                <Text style={[styles.textStyle, { flex: 1 }]}>Name</Text>
                <Text style={[styles.textStyle, { flex: 2 }]}>
                  Email {'\n'}
                  <Text
                    style={{ color: '#2980b9' }}
                    onPress={() => {
                      this._copyToClip()
                    }}
                  >
                    (Copy to clipboard)
                  </Text>
                </Text>
                <Text style={[styles.textStyle, { flex: 2 }]}>
                  Phone Number {'\n'}
                  <Text
                    style={{ color: '#2980b9' }}
                    onPress={() => {
                      this._copyToClip()
                    }}
                  >
                    (Copy to clipboard)
                  </Text>
                </Text>
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
    paddingHorizontal: 15,
  },
  textContainerContent: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  smallTextStyle: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000',
  },
})

const mapStateToProps = state => ({
  teamMembers: state.dashboard,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTeamMembers,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(MyTeamMembers)
