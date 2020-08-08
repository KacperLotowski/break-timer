import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles/Styles';
import Stopwatch from './components/Stopwatch.js';
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
            <View style={styles.TimerMain}>
              <View style={styles.TopTile}>
                <Text style={{
                  fontSize: 35,
                  color: 'black',
                  fontWeight: 'bold',
                  fontFamily: 'headline'                  
                }}>Money Break</Text>
              </View>
              <Stopwatch />
            </View>
          </View>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
};

