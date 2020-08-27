import React, { Component } from 'react';
import { Keyboard, Animated, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../Styles/Styles';
import DropDownPicker from 'react-native-dropdown-picker';

class Stopwatch extends Component {

  constructor() {
    super();
    this.state = {
      income: '',
      currency: '',
      timerOn: false,
      timerStart: '',
      timerTime: '',
      fadeCard1: new Animated.Value(1),
      fadeCard2: new Animated.Value(0),
      fadeCard3: new Animated.Value(0),
      moveCard1: new Animated.Value(0),
      moveCard2: new Animated.Value(500),
      moveCard3: new Animated.Value(500),
      fxRate: '',
      country: '',
      bigMacPrice: '',
      isLoading: true
    };
  }

    startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: Date.now() - this.state.timerTime,
        });
        this.timer = setInterval(() => {
          this.setState({
            timerTime: Date.now() - this.state.timerStart
          });
        }, 1000);
        Animated.timing(this.state.moveCard3, {
          toValue: 500,
          duration: 700
        }).start();
        Animated.timing(this.state.moveCard2, {
          toValue: 0,
          duration: 700
        }).start();
        Animated.timing(this.state.fadeCard3, {
          toValue: 0,
          duration: 700
        }).start();
        Animated.timing(this.state.fadeCard2, {
          toValue: 1,
          duration: 700
        }).start();
      };
    
    stopTimer = () => {
        this.setState({ 
          timerOn: false,
        });
        clearInterval(this.timer);
        Animated.timing(this.state.moveCard2, {
          toValue: -500,
          duration: 700
        }).start();
        Animated.timing(this.state.moveCard3, {
          toValue: 0,
          duration: 700
        }).start();
        Animated.timing(this.state.fadeCard2, {
          toValue: 0,
          duration: 700
        }).start();
        Animated.timing(this.state.fadeCard3, {
          toValue: 1,
          duration: 700
        }).start();
      };

    resetTimer = () => {
        this.setState({
          timerStart: 0,
          timerTime: 0,
        });
        Animated.timing(this.state.moveCard1, {
          toValue: -500,
          duration: 700
        }).start();
        Animated.timing(this.state.moveCard2, {
          toValue: 0,
          duration: 700
        }).start();
        Animated.timing(this.state.moveCard3, {
          toValue: 500,
          duration: 700
        }).start();
        Animated.timing(this.state.fadeCard3, {
          toValue: 0,
          duration: 700
        }).start();
        Animated.timing(this.state.fadeCard2, {
          toValue: 1,
          duration: 700
        }).start();
        Animated.timing(this.state.fadeCard1, {
          toValue: 0,
          duration: 700
        }).start();
      };

    handleSubmit = () => {
        this.setState({
          timerStart: 0,
          timerTime: 0,  
        });

        // -------- API CALL --------
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
        .then((response) => response.json())
        .then((json) => {
          this.setState ({ fxRate: json.rates[this.state.currency].toFixed(2) });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });

        let URL = 'https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_' + `${this.state.country}` + '?start_date=2020-07-31&end_date=2020-07-31&api_key=G4sawzw2_RvmoVuDiZEH'
        fetch(URL)
        .then((response) => response.json())
        .then((json) => { 
          this.setState ({ bigMacPrice: json.dataset.data[0][1] });
        })
        .catch((error) => console.error(error));

        Keyboard.dismiss();
        Animated.timing(this.state.moveCard1, {
          toValue: -500,
          duration: 700
        }).start();
        Animated.timing(this.state.moveCard2, {
          toValue: 0,
          duration: 700
        }).start();
        Animated.timing(this.state.fadeCard1, {
          toValue: 0,
          duration: 700
        }).start();
        Animated.timing(this.state.fadeCard2, {
          toValue: 1,
          duration: 700
        }).start();
    }

    handleDefault = () => {
      this.setState({
        income: '',
        currency: '',
        timerOn: false,
        timerStart: '',
        timerTime: '',
        fxRate: '',
        country: '',
        bigMacPrice: '',
        isLoading: true
        });
      Animated.timing(this.state.moveCard1, {
        toValue: 0,
        duration: 700
      }).start();
      Animated.timing(this.state.moveCard2, {
        toValue: 500,
        duration: 700
      }).start();
      Animated.timing(this.state.moveCard3, {
        toValue: 500,
        duration: 700
      }).start();
      Animated.timing(this.state.fadeCard3, {
        toValue: 0,
        duration: 700
      }).start();
      Animated.timing(this.state.fadeCard2, {
        toValue: 0,
        duration: 700
      }).start();
      Animated.timing(this.state.fadeCard1, {
        toValue: 1,
        duration: 700
      }).start();
    }

    render() {

        let { timerTime } = this.state;
        let seconds = ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ('0' + Math.floor(timerTime / 3600000)).slice(-2);
        let earned = ((this.state.income/20/8*(hours)) + (this.state.income/20/8/60*(minutes)) + (this.state.income/20/8/60/60*(seconds))).toFixed(2);
        let earnedUSD = (earned / this.state.fxRate).toFixed(2);
        let earnedBigMacs = (earned / this.state.bigMacPrice).toFixed(0);

        return (

          <View style={styles.TimerMain}>
            <View style={styles.MiddleTile}>

              <Animated.View 
                style={{ 
                  opacity: this.state.fadeCard1, 
                  transform: [{translateX: this.state.moveCard1}], 
                  position: 'absolute',
                  alignItems: 'center'
                  }}>
                <View style={{ zIndex: 1 }}>
                  <DropDownPicker
                    items={[
                      { label: 'Poland|POL', value: 'PLN' },
                      { label: 'Hungary|HUN', value: 'HUF' },
                      { label: 'United States|USA', value: 'USD' },
                      { label: 'Euro Zone|EUR', value: 'EUR' },
                    ]}
                    placeholder='where do you live?'
                    showArrow={false}
                    value={this.state.currency}
                    onChangeItem={(item) => 
                      this.setState({ 
                        currency: item.value, 
                        country: item.label.substring(item.label.length - 3, item.label.length - 0)})
                    }
                    style={{ 
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      backgroundColor: '#FAC748',
                      borderWidth: 0,
                      alignItems: 'center',

                    }}
                    containerStyle={{ 
                      height: 35,
                      width: 200,
                      textAlign: 'center'
                    }}
                    itemStyle={{ 
                      justifyContent: 'center',
                    }}
                    dropDownStyle={{ 
                      color: 'white',
                    }}
                    placeholderStyle={{
                      textAlign: 'center',
                  }}
                    labelStyle={{
                      fontSize: 20,
                      textAlign: 'center',
                  }} />
                </View>
                <View style={styles.UserInput}>  
                  <TextInput 
                    style={{color: 'white'}}
                    placeholder={'Monthly' + ` ${this.state.currency} ` + 'income'}
                    value={this.state.income} 
                    onChangeText={(text) => this.setState({income: text})}
                    keyboardType='numeric'
                    autoCompleteType='off'
                    autoCorrect={false}
                    spellCheck={false}
                    textAlign={'center'}
                    placeholderTextColor='#453712'
                    fontSize='20'
                  />
                </View>
                  {this.state.currency !== '' && this.state.income !== '' && (
                  <TouchableOpacity onPress={this.handleSubmit}>
                    <Text style={styles.clock} role='clock' aria-label='clock'>⏱️</Text>
                  </TouchableOpacity>
                  )}
              </Animated.View> 
                
              <Animated.View 
                style={{ 
                  opacity: this.state.fadeCard2, 
                  transform: [{translateX: this.state.moveCard2}], 
                  position: 'absolute', 
                  alignItems: 'center'
                  }}>
                <Text style={styles.textLarge}>
                    {hours} : {minutes} : {seconds}
                  </Text>
                  <View>
                      {this.state.timerOn === false && this.state.timerTime === 0 && (
                        <TouchableOpacity style={styles.buttonMid} onPress={this.startTimer}>
                          <Text style={styles.buttonText}>Break time!</Text>
                        </TouchableOpacity> 
                      )}
                      {this.state.timerOn === true && (
                        <TouchableOpacity style={styles.buttonMid} onPress={this.stopTimer}>
                          <Text style={styles.buttonText}>Stop</Text>
                        </TouchableOpacity>
                      )}
                  </View>
              </Animated.View>
              
              <Animated.View 
                style={{ 
                  opacity: this.state.fadeCard3,
                  transform: [{translateX: this.state.moveCard3}], 
                  position: 'absolute',
                  alignItems: 'center',
                  }}>
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.textSmall}>You have just earned</Text>
                  <Text style={styles.textLarge}>{earned} {this.state.currency}</Text>
                  
                  {this.state.currency === 'USD' || (
                    <View style={{ alignItems: 'center' }}>
                      <Text style={styles.textSmall}>Which is</Text>
                      <Text style={styles.textSmall}>{earnedUSD} USD</Text>
                    </View>
                  )}

                  {earnedBigMacs > 1 ?
                    <View style={{ alignItems: 'center' }}>
                      <Text style={styles.textSmall}>or {earnedBigMacs} Big Macs 🍔</Text>
                    </View>
                  : earnedBigMacs > 0 ?
                    <View style={{ alignItems: 'center' }}>
                      <Text style={styles.textSmall}>or {earnedBigMacs} Big Mac 🍔</Text>
                    </View> 
                  : console.log('no Big Mac')
                  }


                </View>
              </Animated.View>
            </View>
            <View style={styles.BottomTile}>
              <Animated.View 
                style={{ 
                  opacity: this.state.fadeCard3
                  }}>
                {this.state.timerOn === false && (
                  <TouchableOpacity style={styles.buttonLow} onPress={this.startTimer}>
                    <Text style={styles.buttonText}>Resume</Text>
                  </TouchableOpacity>
                  )}
                {this.state.timerOn === false && (
                  <TouchableOpacity style={styles.buttonLow} onPress={this.resetTimer}>
                    <Text style={styles.buttonText}>Reset Timer</Text>
                  </TouchableOpacity>
                  )}
                {this.state.timerOn === false && (
                  <TouchableOpacity style={styles.buttonLow} onPress={this.handleDefault}>
                    <Text style={styles.buttonText}>Reset App</Text>
                  </TouchableOpacity>
                  )}
              </Animated.View>
            </View>
          </View> 
        )
    } 
}

export default Stopwatch;
