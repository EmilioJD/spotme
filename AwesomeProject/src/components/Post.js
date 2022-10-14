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
      paddingTop:15,
      paddingBottom:5,
      paddingLeft:20
    },
    imageView: {
      padding:10,
      justifyContent: 'center'
    },
    comments: {
      paddingTop:110,
      paddingBottom:135
    //   alignItems: 'center'
    },
    image: {
      width: 375,
      height: 425,
      alignSelf: 'center',
      resizeMode: 'cover'
    }
});

export default Post;