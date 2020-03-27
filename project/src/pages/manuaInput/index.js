import React, { useState } from 'react';
import { Text, View, FlatList, TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import WordItem from '../../components/BestWords/WordItem'
import SearchBar from '../../components/BestWords/SearchBar'

import BestWords from '../../components/BestWords/SearchWord'

export default function ManualInput({ navigation }) {
  const [words, setWords] = useState([
    // { score: 1, word: 'test1', key: '1' },
    // { score: 2, word: 'test2', key: '2' },
    // { score: 3, word: 'test3', key: '3' },
    // { score: 4, word: 'test4', key: '4' },
  ]);

  const submitHandler = (word) => {
    setWords((prevWords) => {
     return (
          BestWords(word) 
        ) 
    });
  };

  return (
    <View style={ styles.container} >

      <View style={ styles.bar}>
        <SearchBar submitHandler={submitHandler}/>
      </View>

      <FlatList
        ItemSeparatorComponent={ () => (<View style={{ borderBottomWidth: StyleSheet.hairlineWidth }}/>) }
        data={ words } 
        renderItem={({item}) => 
          ( <WordItem item={item} navigation={navigation} /> 
        )}
      />  

    </View>
  );
}
 
let styles = StyleSheet.create({
  bar: {
    elevation: 10,
    backgroundColor: '#555'
  },
});


