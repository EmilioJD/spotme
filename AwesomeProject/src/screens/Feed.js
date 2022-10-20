import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, View, FlatList, StyleSheet, Text, Image, Dimensions } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

const DATA = [
    {
        'id': '33576e86-54ac-4b0c-9a8e-74ed6b0dc916',
        'username': 'FrankyF',
        'profilePic': require('../../images/IMG_1298.jpg'),
        'image': require('../../images/IMG_1113.jpg'),
    },
    {
        'id': '6f569eea-0133-4f83-b896-0820f5beaf1b',
        'username': 'FrankyF',
        'profilePic': require('../../images/IMG_1298.jpg'),
        'image': require('../../images/IMG_1297.jpg'),
    },
    {
        'id': '721f82f5-1dba-4f04-be9c-ea457f7630a6',
        'username': 'FrankyF',
        'profilePic': require('../../images/IMG_1298.jpg'),
        'image': require('../../images/67176039253__C4586627-78D4-4EEB-B3F7-28C7693B4188.jpg')
    }
  ]

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 50;

const Feed = ({navigation}) => {
    const renderItem = ({ item }) => (
      <Post image={item.image} profilePic={item.profilePic} name={item.username}/>
      );
    
    return (
      <SafeAreaView style={styles.container}>
        {/* <Header/> */}
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          snapToInterval={windowHeight}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      padding:20
    },
  });

export default Feed;