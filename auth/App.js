import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import  firebase  from 'firebase';
import { Header, Button, CardSection, Spinner } from './src/component/common';
import LoginForm from './src/component/LoginForm'

export default class App extends Component {

  state = { loggedIn: null }

  componentWillMount(){ 
    firebase.initializeApp({
      apiKey: "AIzaSyDD42yQWAWoKD4Nz3Uv7IDeR3IMVk9YXuE",
      authDomain: "authentication-c1ac5.firebaseapp.com",
      databaseURL: "https://authentication-c1ac5.firebaseio.com",
      projectId: "authentication-c1ac5",
      storageBucket: "authentication-c1ac5.appspot.com",
      messagingSenderId: "394723489068"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false});        
      }
    });
  } 

  renderComponent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection><Button onPress={ () => firebase.auth().signOut()}> Log Out </Button></CardSection>
        );
      case false:
       return <LoginForm />;
      default:
        return <Spinner size="large"/>
  } 
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderComponent()}
      </View>
    );
  }
}

const styles = ({
  
});
