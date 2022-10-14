import React, {Fragment} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Feed from './src/screens/Feed'
import MyProfile from './src/screens/MyProfile'
import Header from './src/components/Header';
import MyTeams from './src/screens/MyTeams'

// TODO: set up navigation once we have multiple screens

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return(
    <Tab.Navigator 
          initialRouteName="Feed"
          screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: { fontSize: 14, 
                                fontFamily: 'Helvetica-Bold', 
                                textTransform: 'none' },
          }}>
          <Tab.Screen
            name='Feed'
            component={Feed}
            options={{ tabBarLabel: 'Community' }}
          />
          <Tab.Screen
            name='MyTeams'
            component={MyTeams}
            options={{ tabBarLabel: 'MyTeams' }}
          />
          <Tab.Screen
            name='MyProfile'
            component={MyProfile}
            options={{ tabBarLabel: 'MyProfile' }}
          />
     </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Header'
          component={(TabNavigator)}
          options={({route, navigation}) => ({
            title: "SpotMe",
            // headerTintColor: '#fff',
            headerTitleStyle: {
              color: 'red',
              fontSize: 28,
              fontFamily: 'Helvetica-Bold',
              alignSelf: 'center'
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



