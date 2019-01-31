import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messgages: []

    }
  }
  render() {
    return (
      <Text>Dude... Read.</Text>
    )
  }
}
