import dictionary from '../../data/dictionary.json'
import letterValues from '../../data/letterValues.json'
import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight, TextInput } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const bg_color = '#AAAAAA'
const grey = '#CCCCCC'
const white = '#FFFFFF'
const black = '#000000'


export default class bestWords extends Component {
  state = { 
    data: [] 
  };
  
  render() {
    return (
      <View style={{ backgroundColor: bg_color, elevation:4, }} >
        
        <View style={ styles.searchBar }>

          <MaterialIcons name={'search'} size={40} color= {white} style= { styles.searchBarIcon } />
          <SearchInput/>
          
        </View>

        <FlatList
          ItemSeparatorComponent={ () => (<View style={ styles.lineSeparator }/>) }
          data={ this.state.data } 
          renderItem={({item}) => ( RenderItem(item))}
        />
      </View>
    );
  }


  
  

};

 
function SearchInput() {
  const [value, setValue] = React.useState("")

  return (
    <TextInput
      style={ styles.searchBarText}
      onChangeText={text => setValue(text)} //onFocus
      onSubmitEditing={() => this.setState({data: BestWords(value)})}
        
        // this.setState({ data: BestWords(value)}).bind(bestWords)}
      value={value}
      placeholder= { "Search" }
      placeholderTextColor= {white}
    />
  );
};

function RenderItem(item) {
  return (
    <TouchableHighlight>

    <View style={ styles.item }>
      <View
        style={ styles.itemScore}>
        <Text style={{fontSize: 35}}>{item.score}</Text>
      </View>
      <View
        style={ styles.itemText }>
        <Text style={{fontSize: 30}}>{item.word.toUpperCase()}</Text>
      </View>
    </View>

  </TouchableHighlight>
  )
};




styles = StyleSheet.create({
  searchBar: {
    height: 65,
    width: '100%',
    borderWidth: 5,
    borderRadius: 25,
    backgroundColor: grey,
    borderColor: bg_color,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center' 
  },
  searchBarText: {
    fontSize: 27,
    textAlignVertical: 'center',
    color: black,
    
    
  },
  searchBarIcon: {
    marginLeft: 7,
    marginRight: 0,
  },
  item: {
    backgroundColor: '#EFEFEF',
    // borderColor: '#000000',
    // borderWidth: 2,
    flexDirection: 'row',
    height: 60,
    alignContent: 'space-between',
    alignItems: 'center' 
  },
  itemText: {
    // backgroundColor: '#FFFFFF',
    // borderColor: '#000000',
    // borderWidth: 2,
  },
  itemScore: {
    // backgroundColor: '#FFFFFF',
    // borderColor: '#000000',
    // borderWidth: 2,
    width: 60
  },
  lineSeparator: { 
    borderBottomWidth: StyleSheet.hairlineWidth,
  }

});

function BestWords(letters) {
  // letters = 'ther';
  let words = Object.keys(dictionary);
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
  // orderedList = items.sort((a,b)=> b.score - a.score)
  
  
}