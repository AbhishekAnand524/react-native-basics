import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';


export class CardSection extends Component {
    render() {
        const { viewStyle, textStyle } = styles;
      return (
      <View style={styles.containerStyle}>
        {this.props.children}
      </View>
      );
    }
} 


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection: 'row',
        borderColor:'#ddd',
        position: 'relative'
    }
};