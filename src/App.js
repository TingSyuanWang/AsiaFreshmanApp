import React, { Component } from 'react';
import { Freshman } from './config/router';
import SplashScreen from 'react-native-splash-screen'

class App extends Component {

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }

    render() {
        return <Freshman />;
    }
}

export default App;