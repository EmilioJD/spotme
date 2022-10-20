import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import PostHeader from '../components/PostHeader';

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

const styles = StyleSheet.create({
    post: {
      flex:1
    },
    top: {
      paddingTop: 10,
      paddingLeft: 20
    },
    imageView: {
      padding: 10,
      justifyContent: 'center'
    },
    comments: {
      padding: 100,
      borderBottomColor: '#808080',
      borderBottomWidth: 0.2
    //   alignItems: 'center'
    },
    image: {
      width: 375,
      height: 400,
      alignSelf: 'center',
      resizeMode: 'cover'
    }
});

export default Post;