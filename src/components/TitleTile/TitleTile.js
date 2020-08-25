import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../../Styles/Styles';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

class TitleTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
        };
      }
    
      async _loadFontsAsync() {
        await Font.loadAsync({
          'headline': require('../../../assets/fonts/MonotypeCorsivaRegular.ttf'),
        });
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
      }
    
      render() {
        if (this.state.fontsLoaded) {
          return (
                <View style={styles.topTile}>
                <Text style={{
                fontSize: 50,
                color: 'black',
                fontWeight: 'bold',
                fontFamily: 'headline'                
                }}>Lunch Break</Text>
            </View>
      );
    } else {
      return <AppLoading />;
    }
  }
};

export default TitleTile;