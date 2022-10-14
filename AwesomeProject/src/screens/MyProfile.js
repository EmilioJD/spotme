import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, View, FlatList, StyleSheet, Text, Image, Dimensions } from 'react-native';
import Header from '../components/Header';

const MyProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <Header/> */}
            <Text>MyProfile Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})

export default MyProfile