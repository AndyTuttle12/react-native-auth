import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBzjBRO08mbVKZn6rdULVyqx-R2EnIKYTk",
            authDomain: "react-native-auth-8ccba.firebaseapp.com",
            databaseURL: "https://react-native-auth-8ccba.firebaseio.com",
            projectId: "react-native-auth-8ccba",
            storageBucket: "react-native-auth-8ccba.appspot.com",
            messagingSenderId: "190876258649"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;