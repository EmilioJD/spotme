import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, View, FlatList, StyleSheet, Text, Image, Dimensions } from 'react-native';
import PostHeader from '../components/PostHeader';

const DATA = [
    {
        'id': '33576e86-54ac-4b0c-9a8e-74ed6b0dc916',
        'username': 'FrankyF',
        'image': require('../../images/IMG_1113.jpg'),
        'profilePic': require('../../images/IMG_1298.jpg')
    },
    {
        'id': '6f569eea-0133-4f83-b896-0820f5beaf1b',
        'username': 'FrankyF',
        'image': require('../../images/IMG_1297.jpg'),
        'profilePic': require('../../images/IMG_1298.jpg')
    },
    {
        'id': '721f82f5-1dba-4f04-be9c-ea457f7630a6',
        'username': 'FrankyF',
        'image': require('../../images/67176039253__C4586627-78D4-4EEB-B3F7-28C7693B4188.jpg'),
        'profilePic': require('../../images/IMG_1298.jpg')
    }
  ]

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 50;

const Post = ({ image, profilePic, name}) => (
  <View style={styles.post}>
    <View style={styles.top}>
      <PostHeader image={profilePic} name={name}/>
    </View>
    <View style={styles.imageView}>
      <Image source={image} style={styles.image}/>
    </View>
    <View style={styles.comments}>
      <Text>Comments</Text>
    </View>
  </View>
);

const Feed = () => {
    const renderItem = ({ item }) => (
      <Post image={item.image} profilePic={item.profilePic} name={item.username}/>
      );
    
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          snapToAlignment='center'
          snapToInterval={windowHeight}
          decelerationRate="fast"
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
    post: {
      flex:1
    },
    top: {
      paddingTop:15,
      paddingBottom:5,
      paddingLeft:20
    },
    imageView: {
      padding:10,
      justifyContent: 'center'
    },
    comments: {
      padding:90,
      alignItems: 'center'
    },
    title: {
      fontSize: 22,
    },
    image: {
      width: 375,
      height: 475,
      alignSelf: 'center',
      resizeMode: 'cover'
    }
  });

export default Feed;