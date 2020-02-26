import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.fixToText}>
          <Button
            title='Go'
            onPress={() => Alert.alert('Go button pressed')}
          />
          <Button
            title='More'
            onPress={() => Alert.alert('More button pressed')}
          />
          <Button
            title='Hisory'
            onPress={()=> Alert.alert('History button pressed')}
           />
           <Button
            title = 'Upload'
            onPress={()=> Alert.alert('Upload button pressed')}
            />
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

});
