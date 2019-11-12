import React from 'react'
import { homeStyles } from './styles'
import quiz from '../assets/quiz.gif'

import {View, Image, ScrollView} from 'react-native'
import {Card, Title, Paragraph } from 'react-native-paper'

import MyAppBar from "./MyAppBar"

import { connect } from 'react-redux'
import { startGame } from '../redux/actions'

const data = [
        "•  Navigate throught the menus with the left pannel.",
        "•  While playing, do not submit the answers until you have finished.",
        "•  The answers are saved automatically and will be submited if you run out of time.",
        "•  Reset the game with the up-right corner button. "
]

import {secondPassed} from "../redux/actions"


class Home extends React.Component {



    render(){
        return(
            <View> 
                       
                <MyAppBar reset = {()=>{}} seconds = {0} finished started = {false} toggleDrawer = {this.props.navigation.openDrawer} />
                <View style={homeStyles.homeRoot} >
                    <ScrollView  style={{width:"100%", height:"100%"}} showsVerticalScrollIndicator={false} contentContainerStyle={homeStyles.scrollRoot} > 
                        <Card style = {homeStyles.paper}>
                            <Title style={{paddingBottom:10}}>
                                Welcome to Quiz App!
                            </Title>
                            <Image source = {quiz} style={homeStyles.gif} alt = "quiz"/>
                        </Card>    
                        <Card style = {homeStyles.paper}>    
                            <Paragraph>
                            This web will challenge you. You will be ask to answer 10 questions in 5 minutes. Then, you will be given the solutions.
                            </Paragraph>
                            {data.map((text, index) =>{

                            return <Paragraph key={index}>{text}</Paragraph>
                            })}
                            <Paragraph>
                                Have fun! 
                            </Paragraph>
                        </Card>
                    </ScrollView>    
                </View>
            
            </View>
        )
    }
    
    
}


const mapStateToProps = function(state){
    return {
      ...state
    };
  }
  

export default connect(mapStateToProps)(Home);



