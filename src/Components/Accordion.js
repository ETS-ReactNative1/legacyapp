import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { AccordionContainer } from '@/Components'

export default class Accordion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      expanded: false,
    }
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    return (
      <View>
        <AccordionContainer color="#ddd">
          <TouchableOpacity
            style={styles.row}
            onPress={() => this.toggleExpand()}
          >
            <Text style={styles.title}>{this.props.title}</Text>
          </TouchableOpacity>
          <View style={styles.parentHr} />
          {this.state.expanded && (
            <View style={styles.child}>
              <Text style={styles.descStyle}>{this.props.desc}</Text>
            </View>
          )}
        </AccordionContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  row: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  parentHr: {
    marginTop: 10,
    width: '100%',
  },
  child: {
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    padding: 16,
  },
  descStyle: {
    fontSize: 13,
    color: '#000',
  },
})
