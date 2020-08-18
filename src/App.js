import React from 'react';
import { View } from 'react-native';
import { styles } from './Styles/Styles';
import TitleTile from './components/TitleTile/TitleTile';
import Stopwatch from './components/Stopwatch/Stopwatch';

export default class App extends React.Component {
  
  render() {
      return (
        <View>
          <View style={styles.TimerMain}>
            <TitleTile />
            <Stopwatch />
          </View>
        </View>
      );
    }
  }

