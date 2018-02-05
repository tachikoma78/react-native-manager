import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import {
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyCvbV9mVswI1QlRr_eVsakJ2IEo3O_rZl0",
      authDomain: "manager-404ba.firebaseapp.com",
      databaseURL: "https://manager-404ba.firebaseio.com",
      projectId: "manager-404ba",
      storageBucket: "",
      messagingSenderId: "928055502172"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
            <Text>
              Hello!
            </Text>
        </View>
      </Provider>
    );
  }
}