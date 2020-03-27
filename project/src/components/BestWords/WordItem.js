import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default function RenderItem({ item, navigation }) {
    // alert(item.word)

    return (
      <TouchableHighlight 
        onPress={() => navigation.navigate('Definition', {word: item.word})}>
        <View style={ styles.item }>
          
          <View style={ styles.itemScore}>
            <Text style={{fontSize: 35}}>{item.score}</Text>
          </View>
          <View style={ styles.itemWord }>
            <Text style={{fontSize: 30}}>{item.word.toUpperCase()}</Text>
          </View>
          
        </View>
  
    </TouchableHighlight>
    )
};




let styles = StyleSheet.create({
  item: {
    backgroundColor: '#EFEEEE',
    // borderColor: '#000000',
    // borderWidth: 2,
    flexDirection: 'row',
    height: 60,
    // alignContent: 'space-between',
    alignItems: 'center' 
  },
  itemWord: {
    // borderColor: '#000000',
    // borderWidth: 2,
  },
  itemScore: {
    marginLeft: 5,
    marginRight: 15,
    // borderColor: '#000000',
    // borderWidth: 2,
    alignItems: 'flex-end',
    width: 45
  },
});





