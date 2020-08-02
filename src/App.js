import React from "react";
import { View } from "react-native";
import Stopwatch from "./components/Stopwatch.js";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync({
      'headline': require('../assets/fonts/MonotypeCorsivaRegular.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View>
          <View>
            <Stopwatch />
          </View>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
};

