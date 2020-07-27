import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    headline: {
      fontSize: 35,
      color: "black",
      fontWeight: "bold",

    },
    textLarge: {
      width: "100%",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      fontSize: 30,
      color: "white",
      textAlign: "center"
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


    buttonMid: {
      width: 250,
      height: 40,
      margin: 5,
      backgroundColor: "#20639B",
      alignSelf: 'center',
      justifyContent: "center",
    },

    buttonLow: {
      width: 250,
      height: 40,
      margin: 5,
      backgroundColor: "#141115",
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
      backgroundColor: "#141115",
    },
    TopTile: {
      width: "100%",
      height: "33%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FAC748"
    },
    MiddleTile: {
      // width: "100%",
      height: "34%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#141115",

    },
    BottomTile: {
      height: "33%",
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: "#20639B",
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