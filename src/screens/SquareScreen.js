import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from './components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch (action.type) {
        case 'Increase':
            return { ...state, [action.color]: Math.min(state[action.color] + action.diff, 255) };
        case 'Decrease':
            return { ...state, [action.color]: Math.max(state[action.color] - action.diff, 0) };
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => dispatch({ type: 'Increase', color: 'red', diff: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'Decrease', color: 'red', diff: COLOR_INCREMENT })}
            />
            <ColorCounter
                color="Green"
                onIncrease={() => dispatch({ type: 'Increase', color: 'green', diff: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'Decrease', color: 'green', diff: COLOR_INCREMENT })}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => dispatch({ type: 'Increase', color: 'blue', diff: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'Decrease', color: 'blue', diff: COLOR_INCREMENT })}
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
    }
});

export default SquareScreen;
