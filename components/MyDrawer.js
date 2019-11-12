import React from "react"
import { Drawer, Title } from "react-native-paper"
icons = ["home","gamepad", "person"]

import {StyleSheet,View} from "react-native"
import {NavigationActions} from "react-navigation"

export default class MyDrawer extends React.Component{ 

  navigateToScreen = ( route ) =>(
    () => {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
})

  render(){

    return(
      <View style = {styles.container}>
        <View style={styles.headerContainer}>
            <Title style={styles.headerText}>Quiz App</Title>
        </View>
            {['Home', 'Play', 'Author'].map((text, index) => {
                return (
                <Drawer.Item
                    key = {index}
                    label = {text}
                    icon = {icons[index]}
                    onPress={this.navigateToScreen(text)}
                    active={this.props.navigation.state.index===index}/>)

                }
              )}
        
      </View>)
} 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"

  },
  headerContainer: {
    height: 150,
    display: "flex",
    justifyContent: "center",
    flexDirection : "column",
    backgroundColor:"#6200EE"
  },
  headerText: {
    color: '#ffffff',
    textAlign: "center",
    justifyContent: "center"
  },
  drawerStyle:{
    color: "#ffffff"
  }
});





