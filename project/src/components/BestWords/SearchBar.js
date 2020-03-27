import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


export default function SearchBar({ submitHandler }) {
    const [value, setValue] = React.useState("")
  
    return (
        <View style= { styles.searchBar }>

          <View style={ styles.searchBarIcon}>
            <MaterialIcon name={'search'} color={'#FFF'} size={60} />
          </View>

          <TextInput
            style={ styles.searchBarText}

            onChangeText={text => setValue(text)} //onFocus
            onSubmitEditing={ () => submitHandler(value) }
            value={value}
            placeholder= { "Search for Best Word" }
            placeholderTextColor= {'#FFF'}
          />

        </View>



    );
}


let styles = StyleSheet.create({  
  searchBar: {
    borderRadius: 35,
    backgroundColor: '#AAA',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center' ,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
  },
  searchBarText: {
    fontSize: 30,
    textAlignVertical: 'center',
    color: '#FFF',  
  },

  searchBarIcon: {
    marginLeft: 7,
  },

});