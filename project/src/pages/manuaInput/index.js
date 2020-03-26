import dictionary from '../../data/dictionary.json'
import letterValues from '../../data/letterValues.json'
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

const DATA = BestWords('zquabce');
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

function BestWords(letters) {
  // letters = 'ther';
  words = Object.keys(dictionary);
  letters = letters.toLowerCase();
  let dummyLetters = letters;
  
  let validWords = [];
  for (index = 0; index < words.length; index++) {
    let word = words[index];
    let valid = true;
    for (j = 0; j < word.length; j++) {
      if (!dummyLetters.includes(word[j])) {
        valid = false
      }
      dummyLetters = dummyLetters.replace(word[j],"",1);

    }
    if (valid) {
      validWords.push(word);
    }
    dummyLetters = letters
  }
  alert(validWords)


  let items = [];
  for (index = 0; index < validWords.length; index++) { 
    let scoreArray = validWords[index].split("").map(letter => letterValues[letter.toUpperCase()])
    let score = scoreArray.reduce((accum, val) => (accum+val))
    let item = {score: score, word: validWords[index], key: index.toString()};
    items.push(item);
  } 

  return (
    items.sort((a,b)=> b.score - a.score)
  );
}