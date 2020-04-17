import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Image,
  Text,
  Alert,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';


export default class App extends Component {
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
      <KeyboardAvoidingView
      style={{flex:1}}>
        <ScrollView>
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
          <View style={styles.board}>
          <Image source={require('../../images/board.jpg')} style={styles.board1}/>
              <View style={styles.boardContainer}>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>

              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>

              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>

              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>

              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>

              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>

              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>

              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>

              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              <TextInput maxLength = {1} autoCapitalize='characters' style={styles.boardTextbox}/>
              
              </View>
              
          </View>
          
          <View style={styles.myLetters}>
             <TextInput
                placeholder = "Type your letters here  "
                placeholderTextColor="#B9B9B9"
                style={styles.myText}
                autoCapitalize='characters'
             />
          </View>
        </View>

      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  boardTextbox:{
    textTransform: 'uppercase',
    //backgroundColor:'white',
    width:34,
    height:38,
    borderRadius: 8,
    marginRight:1.1,
    marginBottom:3.5,
    textAlign:'center',
    fontSize:33,
    color:'black',
    padding:0,
    fontWeight:'bold',
    
  },
  boardContainer:{
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 8,
    marginLeft:4,
    flexWrap: 'wrap',
  },
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-around',
  },
  banner: {
    height: 50,
    backgroundColor: '#0B0C10',
    justifyContent: 'space-around',
    elevation: 5,
    backgroundColor: '#1F2833'
  },
  bannerText: {
    fontSize: 25,
    alignSelf: 'center',
    fontFamily: 'sans-serif-thick',
    color: "#66FCF1",
    fontWeight:'bold',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1F2833'

  },
  bestWords: {
    height:70,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 10,
    backgroundColor : 'white'

  },

  board: {
    flex:1,
    borderColor: 'white',
    //width: '100%',
    //resizeMode: 'stretch',
    //borderColor:'red',
    //borderWidth: 1,
    width: 400, 
    height: 465,
    
    // resizeMode: 'contain',
  },
  board1: {
    flex:1,
    //borderColor: 'white',
    //width: '100%',
    
    width: 390, 
    height: 470,    
    // resizeMode: 'contain',
    //width: '100%',
    //height: '100%',
    resizeMode: 'stretch',
    //paddingRight:1,
    
  },
  myLetters: {
    height: 75,
    justifyContent: 'center',
    position: 'relative',
    width:'100%',
    fontSize:25,
  },
  navBar: {
    height: 60,
    width: '100%',
    backgroundColor: '#45A29E',
    justifyContent: 'center',
  },
  myText: {
    alignSelf: 'center',
    fontSize: 20,
    color: "#66FCF1",
    fontWeight: 'bold',
  },

});

