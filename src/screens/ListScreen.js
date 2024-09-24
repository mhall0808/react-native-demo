import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Steven', age: '38'},
        {name: 'Tyson', age: '38'},
        {name: 'Aaron', age: '34'},
        {name: 'David', age: '38'},
        {name: 'Andrew', age: '42'},
        {name: 'Rebecca', age: '45'},
        { name: 'Ian', age: '50' }
    ]

    return (<FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 5
    }
});

export default ListScreen;