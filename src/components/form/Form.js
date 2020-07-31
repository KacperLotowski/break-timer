import React from "react";
import { Animated } from "react-native";

export class Form extends React.Component {
  
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
}

export default Form;


