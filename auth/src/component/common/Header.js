import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';


export class Header extends Component {
  render() {
      const { viewStyle, textStyle } = styles;
    return (
    <View style={viewStyle}>
      <Text style={textStyle}>{this.props.headerText}</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyle :{
        elevation: 4,
        backgroundColor: '#F5F5E5',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.9
    }, 
    textStyle :{
        fontSize: 30,
    }
});
