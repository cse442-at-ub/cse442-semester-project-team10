import dictionary from '../../data/dictionary.json'
import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Image,
//   Text,
//   Alert,
//   TouchableOpacity
// } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class bestWords extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderWidth: 2,
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
          <View
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderWidth: 2,


          }}/>
          <View
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderWidth: 2,
            width: 60,
          }}/>
        </View>
        <FlatList
          ItemSeparatorComponent={
            () => (<View style={{ borderBottomWidth: StyleSheet.hairlineWidt }}/>)
          }
          data={DATA}
          // renderItem={({ item }) => <Text>{item.word}</Text>}
          renderItem={({item}) => (
            <TouchableHighlight>
              <View style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#000000',
                borderWidth: 2,
                flexDirection: 'row',
                height: 60,
                alignContent: 'space-between',
                }}>

                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#000000',
                    borderWidth: 2,
                    width: 60
                  }}>
                  <Text style={{fontSize: 35}}>{item.score}</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#000000',
                    borderWidth: 2,
                }}>
                  <Text style={{fontSize: 35}}>{item.word}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
};

function SearchInput(placeholder) {
  const [value, setValue] = React.useState("");

  return (
    <TextInput
      style={styles.searchBar}
      onChangeText={text => setValue(text)} //onFocus
      value={value}
      placeholder= {placeholder}
    />
  );
}

const DATA = [
                {word: 'Word Text', score: '12', key: '1'},
                {word: 'Word Text2', score: '11', key: '2'},
                
              ];
// const searchIcon = (
//   <MaterialIcons.Button 
//       name="search" 
//       backgroundColor="#111111" 
//       onPress={this.loginWithFacebook}>
//   </MaterialIcons.Button>
// );

const styles = StyleSheet.create({
  searchBar: {
    height:'100%',
    width: '100%',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 10,
    backgroundColor : '#EEE'

  },

});