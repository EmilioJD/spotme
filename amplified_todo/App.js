import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import Home from './src/Home';

Amplify.configure(awsconfig);

async function signUp() {
  try {
      const { user } = await Auth.signUp({ username, password });
      console.log(user);
  } catch (error) {
      console.log('error signing up:', error);
  }
}

async function signIn() {
  try {
      const user = await Auth.signIn(username, password);
  } catch (error) {
      console.log('error signing in', error);
  }
}

async function signOut() {
  try {
      await Auth.signOut();
  } catch (error) {
      console.log('error signing out: ', error);
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
