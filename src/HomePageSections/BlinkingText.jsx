/*This is an Example of React Native Blinking Animation */
import React, { Component } from 'react';
//import react in our project

import { Text, View } from 'react-native';
//import all the components we needed

class CustomBlinkingTxt extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        // Change the state every second or the time given by User.
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        },
            // Define blinking time in milliseconds
            1000
        );

    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text style={{ textAlign: 'center', marginTop: 0, opacity: this.state.showText ? 0.75 : 1 }}>{this.props.text}</Text>
        );
    }
}

export default class BlinkingText extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', padding: 0 }}>
                <CustomBlinkingTxt text="Binayak Bishnu" />
            </View>
        );
    }
}