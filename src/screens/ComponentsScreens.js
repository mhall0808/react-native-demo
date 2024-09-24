import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const introText = <Text style={styles.textStyle}>Getting started with React Native</Text>
    const name = 'Mark'
    const myName = <Text style={styles.nameStyle}>My name is {name}</Text>

    return (
        <View>
            {introText}
            {myName}
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;