import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World 1 !</Text>
      <Text style={styles.text}>Hello World 2 !</Text>
      <Text style={styles.text}>Hello World 3 !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderWidth: 3,
    borderColor:'black',
    backgroundColor:'white',
    alignItems: 'center'
   // height: '80%',
    //width: '90%'

  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor:'red',
    marginVertical: 10,
    // marginHorizontal: 30
  },
});

export default BoxScreen;
