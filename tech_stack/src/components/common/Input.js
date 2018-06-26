import React, { Component } from 'react';
import {
  Text,  View, TextInput
} from 'react-native';


export class Input extends Component {
  render() {
      const { labelStyle, containerStyle, inputStyle } = styles;
      const { label, onChangeText, value, placheholder, secureTextEntry } = this.props;
    return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput 
        secureTextEntry={secureTextEntry}
        placeholder={placheholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
    );
  }
}


const styles = {
        inputStyle: {
            color: '#000',
            paddingRight:5,
            paddingLeft: 5,
            fontSize: 18,
            lineHeight: 23,
            flex: 2
        },
        labelStyle: {
            fontSize: 18,
            paddingLeft: 20,
            flex: 1,
        },
        containerStyle: {
            height: 40,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        }
}