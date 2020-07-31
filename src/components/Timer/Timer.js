import React from "react";
import { Animated } from "react-native";

export class Timer extends React.Component {

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
}

 export default Timer;
