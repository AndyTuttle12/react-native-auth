import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBzjBRO08mbVKZn6rdULVyqx-R2EnIKYTk",
            authDomain: "react-native-auth-8ccba.firebaseapp.com",
            databaseURL: "https://react-native-auth-8ccba.firebaseio.com",
            projectId: "react-native-auth-8ccba",
            storageBucket: "react-native-auth-8ccba.appspot.com",
            messagingSenderId: "190876258649"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;