import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import ImagePicker from "react-native-image-picker";
import Gallery from 'react-native-image-gallery';

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
      <Gallery
                  style={{ flex: 1, backgroundColor: 'black' }}
                  images={[
                    { source: require('project/src/images/IMG_2657.png'), dimensions: { width: 100, height: 100 } },
                    { source: require('project/src/images/IMG_2655.png'), dimensions: { width: 100, height: 100 } },
                    { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                    { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                    { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
                  ]}
                />


      <Button
              color='#1F2833'
              title = 'Upload'
              onPress={() => handleChoosePhoto()}
              />
      <Button
            title = 'Screenshot'
            />

    </View>

    );

};