import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const PostHeader = ({ image, name }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        padding:10,
        width: 40,
        height: 40,
        borderRadius:25
    },
    text: {
        padding: 10,
        fontSize: 20,
        paddingLeft: 20
    }
})

export default PostHeader;