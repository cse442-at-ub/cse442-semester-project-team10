import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import ImagePicker from "react-native-image-picker";

export default function GalleryScreen() {
  const [photos, setPhotos] = useState([
    {photo: null,}
  ]);

  const handleChoosePhoto = () => {
    const options = {noData: true,};
    ImagePicker.launchImageLibrary(options, response=>{console.log("response", response);
        if(response.uri){
          setPhotos((prevPhotos) => {
            // worasdasdds = prevWords.concat({ score: 12, word: 'test', key: (words.length+1).toString()  })
            return (
                {photo: response}
              )
          });
            setPhotos({photo: response});
        }
    })
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Upload screen</Text>

      <Button
              color='#1F2833'
              title = 'Upload'
              onPress={() => handleChoosePhoto()}
              />


    </View>
    );

};