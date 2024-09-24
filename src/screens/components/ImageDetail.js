import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = props => {
    return (
        <View>
            <Image source={props.imageSource} />
            <Text>{props.imageTitle}</Text>
            <Text>Image Score - {props.imageScore}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 5
    }
});

export default ImageDetail;