import React from 'react';
import { View } from 'react-native';
import { styles } from './src/Styles/Styles';
import TitleTile from './src/components/TitleTile/TitleTile';
import Stopwatch from './src/components/Stopwatch/Stopwatch';

export default class App extends React.Component {
  
  render() {
      return (
        <View>
          <View style={styles.timerMain}>
            <TitleTile />
            <Stopwatch />
          </View>
        </View>
      );
    }
  }

