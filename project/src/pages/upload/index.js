import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImagePicker from "react-native-image-picker";

export default class upload extends Component {
  state = {
    photo: null,
  }
  handleChoosePhoto = () => {
    const options = {noData: true,};
    ImagePicker.launchImageLibrary(options, response=>{console.log("response", response);
        if(response.uri){
            this.setState({photo: response});
        }
    })
  };
  render() {
    const { photo } = this.state;
    return ( 
      this.handleChoosePhoto()
    );
  }
};

const styles = StyleSheet.create({
  myText: {
    alignSelf: 'center',
    fontSize: 15,
    color: "#66FCF1"
  },

});