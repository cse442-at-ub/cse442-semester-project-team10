import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default function SearchInput(placeholder) {
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