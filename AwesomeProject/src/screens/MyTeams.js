import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, View, FlatList, StyleSheet, Text, Image, Dimensions } from 'react-native';
import Header from '../components/Header';

const MyTeams = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <Header/> */}
            <Text>MyTeams Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})

export default MyTeams