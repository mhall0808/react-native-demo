import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{color}</Text>
            <Button
                onPress={onIncrease}
                title={`Increase ${color}`}
            />
            <Button
                onPress={onDecrease}
                title={`Decrease ${color}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    text: {
        fontSize: 24
    }
});

export default ColorCounter;
