import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';



export default class Card extends Component {
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
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,

    }
}