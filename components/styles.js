import { StyleSheet } from 'react-native'
const drawerWidth = 240;
import Constants from "expo-constants"
import {Platform} from "react-native"

export const appBarStyles = StyleSheet.create({
    root: {
      flexGrow: 1,
      
    },
    hide: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
      textAlign : "left",
      color: "white"
    },
    appBarShift: {
      marginLeft: drawerWidth,
    },
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      overflow: "scroll",
      ...Platform.select({
        ios:{
          marginTop:Constants.statusBarHeight
        }
      })
         }
  });

  export const gameStyles = StyleSheet.create({
    card: {
      maxWidth: 645,
      minWidth: 145,
      width: "90%",
    },

    expand: {
      transform: [{ rotate: '0deg'}],
      marginLeft: 'auto',
  
    },
    expandOpen: {
      transform: [{ rotate: '180deg'}]
    },
    avatar: {
      backgroundColor: "#64ffda",
      marginRight: 24
    },
    bigAvatar: {
      margin: 10,
      width: 30,
      height: 30,
    },
    
    content: {
      display : "flex",
      flexDirection : "column",
      justifyContent: "center",
      margin : 100,
      alignItems: "center",
      width : "100%"
    },
    navigation:{
      display:"flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    game: {
      flexDirection: "column",
      alignItems: "center",
      
      height: "90%",
      justifyContent:"space-between",
      ...Platform.select({
        ios:{
          marginTop:70+Constants.statusBarHeight,
        },
        android:{
          marginTop:70
        }
      })
    },
    textField: {
        width: "90%"
    },
    fab: {
      margin: 16,
      alignSelf: "flex-end",
      backgroundColor: "#64ffda"
    },
    extendedIcon: {
      marginRight: 2,
    },
    answer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    questionsIndex:{
      display: "flex",
      flexDirection : "row"
    }  
  });

  export const scoreStyles = StyleSheet.create({
    
    scoreRoot: {
      ...Platform.select({
        ios:{
          marginTop:60+Constants.statusBarHeight,
        },
        android:{
          marginTop:60
        }
      }),
      margin:20,
    },
    scrollRoot:{
      flexGrow:1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent:"space-around"
    },

    paper: {
      marginBottom: 10,
      margin: 2,
      display: "flex",
      elevation: 3,
      flexDirection: "column",
      minWidth: 345,
      width: "98%",
      maxWidth: 845,
      justifyContent: "center",
      padding: 24  },
    gif:{
      width: "100%"
    },
    textRed : {
      backgroundColor: "red",
      color: "white"
    },
    textGreen : {
      backgroundColor: "green",
      color: "white"
    },
    expPanel:{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      minWidth: 345,
      maxWidth: 845,
      paddingHorizontal : 16,
      justifyContent: "center"
    },
    groupAnswers:{
      margin: 10
    }
  });


  export const homeStyles = StyleSheet.create({
    homeRoot: {
      marginTop: 60,
      margin:20,
    },
    scrollRoot:{
      flexGrow:1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent:"space-around"
    },

    paper: {
      marginBottom: 10,
      margin: 2,
      display: "flex",
      elevation: 3,
      flexDirection: "column",
      minWidth: 345,
      width: "98%",
      maxWidth: 845,
      justifyContent: "center",
      padding: 24  },
    gif:{
      width: "100%"
    }
  });

  export const errorStyles = homeStyles;

  export const authorStyles = StyleSheet.create({
    homeRoot: {
      marginTop: 60,
      margin:20,
    },
    scrollRoot:{
      flexGrow:1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent:"space-around"
    },

    paper: {
      marginBottom: 10,
      margin: 2,
      display: "flex",
      elevation: 3,
      flexDirection: "column",
      minWidth: 345,
      width: "98%",
      maxWidth: 845,
      justifyContent: "center",
      padding: 24  },
    header: {
      display : "flex",
      flexDirection: "row",
      alignItems : "center"
    },
  
    heading: {
      fontSize: 15
    },
    avatar: {
      margin: 10,
    },
    bigAvatar:{
      margin: 10,
      width: 90,
      height: 90,
    },
    expPanel:{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      minWidth: 345,
      maxWidth: 845,
      paddingVertical : 0,
      paddingHorizontal: 16,
      justifyContent: "center"
    },
    paperButtons: {
      display: "flex",
      flexDirection: "column",
      minWidth: 345,
      width: "100%",
      maxWidth: 845,
      justifyContent: "center"
    },
    button: {
      margin: 10,
    }
  });