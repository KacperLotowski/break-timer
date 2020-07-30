import React from "react";
import { Animated, Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";

export class Form extends React.Component {
  
    render() {
      return (

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
            textAlign={'center'}
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
            textAlign={'center'}
        />
        </View>
        {this.state.currency !== "" && this.state.income !== "" && (
        <TouchableOpacity onPress={this.handleSubmit}>
            <Text style={styles.clock} role="clock" aria-label="clock">⏱️</Text>
        </TouchableOpacity>
        )}
        </Animated.View> 
      );
    }
  };
  
  export default Form;


