import React from 'react';
import { View } from 'react-native';
import { styles } from './Styles/Styles';
import TitleTile from './components/TitleTile/TitleTile';
import Stopwatch from './components/Stopwatch/Stopwatch';
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
          <View style={styles.TimerMain}>
            <TitleTile />
            <Stopwatch />
          </View>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
};

