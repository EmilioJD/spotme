import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';



const MyTeams = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Teams</Text>
        </View>
        <View style={styles.buttonBar}>
          <View style={styles.buttonContainer}>  
            <TouchableOpacity style={styles.addTeam}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.currTeam}>
              <Text>Redline</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.currTeam}>
              <Text>Chain</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Highlights</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 10
    },
    headerText: {
        padding: 10,
        textDecorationLine: 'underline',
        fontSize: 20
    },
    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    addButtonText: {
        fontSize: 20 
    },
    buttonContainer: {
        padding: 20
    },
    addTeam: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 0.2

    },
    currTeam: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 0.2
    }
})

export default MyTeams