import React, { Component, useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import dictionary from '../../data/dictionary.json'

export default function DefinitionScreen({route, navigation}) {
  const { word } = route.params

  return (
    <ScrollView>
        <View style={ styles.format}>
            <Text>{dictionary[word]}</Text>
        </View>
    </ScrollView>
    
  );

};

let styles = StyleSheet.create({
    
    format: {
        marginTop: 5,
    }
})