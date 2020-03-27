import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from '../pages/home/index'
import InputScreen     from '../pages/manuaInput/index'
import DefinitionScreen from '../pages/manuaInput/definition'
import UploadScreen from '../pages/upload/index'
import SettingsScreen from '../pages/settings/index'





// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// const HomeStack = createStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </HomeStack.Navigator>
//   );
// }

// const SettingsStack = createStackNavigator();

// function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//       <SettingsStack.Screen name="Details" component={DetailsScreen} />
//     </SettingsStack.Navigator>
//   );
// }

const InputStack = createStackNavigator()

function InputStackScreen() {
  return(
    <InputStack.Navigator>
      <InputStack.Screen name="Manually Input Letters" component={InputScreen}/>
      <InputStack.Screen name="Definition" component={DefinitionScreen}/>
    </InputStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home'     : 'home-outline';
            } else if (route.name === 'Input') {
              iconName = focused ? 'card-text' : 'card-text-outline';
            } else if (route.name === 'Upload') {
                return <MaterialIcons name='insert-photo' size={size} color={color} />
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        >

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Input" component={InputStackScreen} />
        <Tab.Screen name="Upload" component={UploadScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



