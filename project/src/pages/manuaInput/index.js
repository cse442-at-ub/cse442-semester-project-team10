import dictionary from '../../data/dictionary.json'
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class bestWords extends Component {

  render() {
    return (
      <View>
        <Text>{Object.keys(dictionary)[0]}</Text>
      </View>
    );
  }
};
