import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Spot</Text>
            <Text style={styles.text2}>Me</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        paddingBottom: 10
    },
    text1: {
        color: 'red',
        fontSize: 28,
        fontFamily: 'Helvetica-Bold'
    },
    text2: {
        color: 'cyan',
        fontSize: 28,
        fontFamily: 'Helvetica-Bold'
    }
})

export default Header