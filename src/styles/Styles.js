import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    textLarge: {
      justifyContent: "center",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      fontSize: 30,
      color: "white"
    },
    textSmall: {
      justifyContent: "center",
      fontFamily: "sans-serif-light",
      fontWeight: "100",
      fontSize: 15,
      color: "white"
    },
    clock: {
      fontSize: 30,
      backgroundColor: "transparent",
      textAlign: "center",
      color: "white"
    },


    button: {
      width: 250,
      margin: 5,
      backgroundColor: "#4169E1",
      alignSelf: 'center',
      justifyContent: "center",
    },
    buttonText: {
      color: "white",
      fontFamily: "sans-serif",
      // fontWeight: "bold",
      fontSize: 20,
      position: "relative",
      textAlign: "center"
    },

    input: {
      backgroundColor: "transparent",
      color: "white",
      borderRadius: 0,
      margin: 10,
      textAlign: "center",
    },
    TimerMain: {
      height: "100%",
      backgroundColor: "black",
    },
    TopTile: {
      width: "100%",
      height: "33%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    },
    MiddleTile: {
      // width: "100%",
      height: "34%",
      justifyContent: "center",
      alignItems: "center",
    },
    BottomTile: {
      height: "33%",
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: "black",
    },
    UserInput: {
      alignItems: "center",
      borderBottomColor: "white",
      borderBottomWidth: 0.5,
      color: "white",
    },
    StopwatchDisplay: {
      color: "white"
    }
  })