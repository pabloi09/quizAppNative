import { Provider} from 'react-redux'
import GlobalState from './reducers'
import { createStore } from 'redux'
import React from 'react'

import { questions } from '../assets/mock-data'

import Author from "../components/Author/Author"
import MyDrawer from "../components/MyDrawer"
import Home from "../components/Home"
import Play from "../components/Play/Play"

import { createDrawerNavigator} from "react-navigation-drawer"
import {createAppContainer } from "react-navigation"


  

export default class ReduxProvider extends React.Component {

    constructor(props){
        super(props);
        this.initialState = { 
            score: 0,
            finished: false,
            started: false,
            currentQuestion: 0,
            questions: [
                ...questions
            ],
            buttonsState: [false, true],
            seconds: 300,
         };
        this.store = this.configureStore()
        this.createAppNavigator = this.createAppNavigator.bind(this)
    }

    render(){
        const AppNavigator = this.createAppNavigator();
        return(
        <Provider store = { this.store } style = {{height:"100%"}}>
            <AppNavigator style = {{height:"100%"}}/>
        </Provider>
        );
    }
 
    createAppNavigator(){
        const Navigator=createDrawerNavigator(
        {
          Home: { screen: props => <Home {...props} store ={this.store}/> },
          Play: {screen: props => <Play {...props} store ={this.store}/>},
          Author: {screen: props => <Author {...props} store ={this.store}/>}
        },
        {
            contentComponent: MyDrawer,
        });
        return createAppContainer(Navigator);
    }    

    configureStore(){
        return createStore(GlobalState, this.initialState);
    }
}