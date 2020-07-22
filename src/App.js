import React from "react";
import { View } from "react-native";
import Stopwatch from "./components/Stopwatch.js";

export class App extends React.Component {
  
  render() {
    return (
      <View>
        <View>
          <Stopwatch />
        </View>
      </View>
    );
  }
};

export default App;