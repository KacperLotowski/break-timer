import React from "react";
import { View } from "react-native";
import Stopwatch from "./components/Stopwatch.js";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

export let customFonts = {
  'headline': require('../assets/fonts/MonotypeCorsivaRegular.ttf'),
};


export class App extends React.Component {

  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
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
    }  else {
      return <AppLoading />;
    }
  }
};

export default App;