import React, { Component } from "react";
import { Keyboard, Animated, Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";

class Stopwatch extends Component {

  constructor() {
    super();
    this.state = {
      income: "",
      currency: "",
      timerOn: false,
      timerStart: "",
      timerTime: "",
      fadeCard1: new Animated.Value(1),
      fadeCard2: new Animated.Value(0),
      fadeCard3: new Animated.Value(0),
      moveCard1: new Animated.Value(0),
      moveCard2: new Animated.Value(500),
      moveCard3: new Animated.Value(500),
      fxRate: "",
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
          duration: 1000
        }).start();
        Animated.timing(this.state.moveCard2, {
          toValue: 0,
          duration: 1000
        }).start();
        Animated.timing(this.state.fadeCard3, {
          toValue: 0,
          duration: 1000
        }).start();
        Animated.timing(this.state.fadeCard2, {
          toValue: 1,
          duration: 1000
        }).start();
      };
    
    stopTimer = () => {
        this.setState({ 
          timerOn: false,
        });
        clearInterval(this.timer);
        Animated.timing(this.state.moveCard2, {
          toValue: -500,
          duration: 1000
        }).start();
        Animated.timing(this.state.moveCard3, {
          toValue: 0,
          duration: 1000
        }).start();
        Animated.timing(this.state.fadeCard2, {
          toValue: 0,
          duration: 1000
        }).start();
        Animated.timing(this.state.fadeCard3, {
          toValue: 1,
          duration: 1000
        }).start();
      };

    resetTimer = () => {
        this.setState({
          timerStart: 0,
          timerTime: 0,
        });
        Animated.timing(this.state.moveCard1, {
          toValue: -500,
          duration: 1000
        }).start();
        Animated.timing(this.state.moveCard2, {
          toValue: 0,
          duration: 1000
        }).start();
        Animated.timing(this.state.moveCard3, {
          toValue: 500,
          duration: 1000
        }).start();
        Animated.timing(this.state.fadeCard3, {
          toValue: 0,
          duration: 1000
        }).start();
        Animated.timing(this.state.fadeCard2, {
          toValue: 1,
          duration: 1000
        }).start();
        Animated.timing(this.state.fadeCard1, {
          toValue: 0,
          duration: 1000
        }).start();
      };

    handleSubmit = () => {
        this.setState({
          timerStart: 0,
          timerTime: 0,  
        });

        // -------- API CALL --------
        fetch("https://api.exchangeratesapi.io/latest?base=PLN")
        .then((response) => response.json())
        .then((json) => {
          this.setState ({ fxRate: json.rates[this.state.currency].toFixed(2) });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });

        Keyboard.dismiss();
        Animated.timing(this.state.moveCard1, {
          toValue: -500,
          duration: 1000
        }).start();
        Animated.timing(this.state.moveCard2, {
          toValue: 0,
          duration: 1000
        }).start();
        Animated.timing(this.state.fadeCard1, {
          toValue: 0,
          duration: 1000
        }).start();
        Animated.timing(this.state.fadeCard2, {
          toValue: 1,
          duration: 1000
        }).start();
    }

    handleDefault = () => {
      this.setState({
        income: "",
        currency: "",
      });
      Animated.timing(this.state.moveCard1, {
        toValue: 0,
        duration: 1000
      }).start();
      Animated.timing(this.state.moveCard2, {
        toValue: 500,
        duration: 1000
      }).start();
      Animated.timing(this.state.moveCard3, {
        toValue: 500,
        duration: 1000
      }).start();
      Animated.timing(this.state.fadeCard3, {
        toValue: 0,
        duration: 1000
      }).start();
      Animated.timing(this.state.fadeCard2, {
        toValue: 0,
        duration: 1000
      }).start();
      Animated.timing(this.state.fadeCard1, {
        toValue: 1,
        duration: 1000
      }).start();
    }

    render() {

        let { timerTime } = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        let earned = ((this.state.income/20/8*(hours)) + (this.state.income/20/8/60*(minutes)) + (this.state.income/20/8/60/60*(seconds))).toFixed(2);

        return (

          <View style={styles.TimerMain}>
{/* TOP          */}
            <View style={styles.TopTile}>
                <Text style={styles.textLarge}>
                  <Text style={{color: "grey"}}>Mo</Text>
                  ney For No
                  <Text style={{color: "orange"}}>thing</Text>
                  </Text>
                <Text style={{color: "orange"}}>{this.state.fxRate}</Text>


            </View>
{/* MIDDLE          */}
            <View style={styles.MiddleTile}>

              <Animated.View 
                style={{
                  opacity: this.state.fadeCard1, 
                  transform: [{translateX: this.state.moveCard1}], 
                  position: "absolute"
                  }}>
                <View style={styles.UserInput}>  
                  <TextInput 
                    style={{color: "white"}}
                    placeholder="Monthly $$$"
                    value={this.state.income} 
                    onChangeText={(text) => this.setState({income: text})}
                    keyboardType="numeric"
                    autoCompleteType="off"
                    autoCorrect={false}
                    spellCheck={false}
                    required
                  />
                </View>
                <View style={styles.UserInput}>
                  <TextInput
                    style={{ color: "white" }}
                    placeholder="Currency (eg. USD)"
                    value={this.state.currency}
                    onChangeText={(text) => this.setState({currency: text})}
                    autoCapitalize="characters"
                    autoCompleteType="off"
                    autoCorrect={false}
                    spellCheck={false}
                    maxLength={3}
                    minLength={3}
                    required
                  />
                </View>
                  <TouchableOpacity onPress={this.handleSubmit}>
                    <Text style={styles.poop} role="poop" aria-label="poop">💩</Text>
                  </TouchableOpacity>
              </Animated.View> 
                
              <Animated.View 
                style={{
                  opacity: this.state.fadeCard2, 
                  transform: [{translateX: this.state.moveCard2}], 
                  position: "absolute", 
                  alignItems: "center"
                  }}>
                <Text style={styles.textLarge}>
                    {hours} : {minutes} : {seconds}
                  </Text>
                  <View>
                      {this.state.timerOn === false && this.state.timerTime === 0 && (
                        <TouchableOpacity style={styles.button} onPress={this.startTimer}>
                          <Text style={styles.buttonText}>break time</Text>
                        </TouchableOpacity> 
                      )}
                      {this.state.timerOn === true && (
                        <TouchableOpacity style={styles.button} onPress={this.stopTimer}>
                          <Text style={styles.buttonText}>stop</Text>
                        </TouchableOpacity>
                      )}
                  </View>
              </Animated.View>
              
              <Animated.View 
                style={{
                  opacity: this.state.fadeCard3,
                  transform: [{translateX: this.state.moveCard3}], 
                  position: "absolute",
                  alignItems: "center",
                  }}>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.textSmall}>You've just earned</Text>
                  <Text style={styles.textLarge}>{earned} {this.state.currency}</Text>
                  {this.state.currency === "PLN" || (
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.textSmall}>Which is</Text>
                    <Text style={styles.textSmall}>{(earned / this.state.fxRate).toFixed(2)} PLN</Text>
                  </View>
                  )}
                </View>
              </Animated.View>
            </View>
{/* BOTTOM          */}
            <View style={styles.BottomTile}>
              <Animated.View 
                style={{
                  opacity: this.state.fadeCard3
                  }}>
                {this.state.timerOn === false && (
                  <TouchableOpacity style={styles.button} onPress={this.startTimer}>
                    <Text style={styles.buttonText}>resume</Text>
                  </TouchableOpacity>
                  )}
                {this.state.timerOn === false && (
                  <TouchableOpacity style={styles.button} onPress={this.resetTimer}>
                    <Text style={styles.buttonText}>reset timer</Text>
                  </TouchableOpacity>
                  )}
                {this.state.timerOn === false && (
                  <TouchableOpacity style={styles.button} onPress={this.handleDefault}>
                    <Text style={styles.buttonText}>reset app</Text>
                  </TouchableOpacity>
                  )}
              </Animated.View>
            </View>
          </View> 
        )
    } 
}

export default Stopwatch;
