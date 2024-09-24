import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Color Screen</Text>
            <Button title="Add a color"
                onPress={() => {
                    setColors([...colors, randomRgb()]);
                }} />
            

            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({item}) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                }}
            />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    
    return `rgb(${red}, ${blue}, ${green})`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ColorScreen;