/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            {'Words with Friends Cheater'}
          </Text>
        </View>

        <View style={styles.body}>
          <View style={styles.bestWords}>
            <Text style={styles.myText}>
              {'Best Words Stuff'}
            </Text>
          </View>
          <Image source={require('./images/IMG_2655.png')} style={styles.board}/>
          <View style={styles.myLetters}>
            <Text style={styles.myText}>
              {'My Words Stuff'}
            </Text>
          </View>
        </View>

        <View style={styles.navBar}>
          <Text style={styles.myText}>
           {'Nav Bar Stuff'}
          </Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    elevation: 5
  },
  bannerText: {
    fontSize: 25,
    alignSelf: 'center',
    fontFamily: 'sans-serif-thick'
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'gray'
  },
  bestWords: {
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  board: {
    flex:1,
    borderColor: 'white',
    backgroundColor: 'blue',
    height: '70%', 
    width: '100%',
    resizeMode: 'cover'
  },
  myLetters: {
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  navBar: {
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  myText: {
    fontSize: 15
  },
});

