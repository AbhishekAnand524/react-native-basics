import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class Button extends Component{

    render() {

        const { buttonStyle, textStyle } = styles;
        const { onPress, children } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={buttonStyle}>
                <Text style={textStyle}>
                    { children }
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    textStyle : {
        alignSelf: 'center',
        color: '#077aff',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle : {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    }
}