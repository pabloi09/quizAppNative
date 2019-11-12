import React from 'react'

import { scoreStyles } from '../styles';

import {List, Text, Paragraph} from "react-native-paper"

import {View} from "react-native"

export default class ExpansionPanelList extends React.Component {

    render(){

        return this.props.questions.map((question,index) => {
                return (
                    
                    <List.Accordion key = {index} style = {scoreStyles.expPanel}
                                    title = {"Question"  + (index + 1) +":" + (question.question)}>
                                    {getAnswerText(question,scoreStyles)}
                    </List.Accordion>
                )
            });
            
        
    }
}

const getAnswerText = function(question,scoreStyles){
    return(
        question.correct ?
            <View style = {{flexDirection:"column",alignItems:"center", width:"85%", padding:24}}>
                <Paragraph>Your answer was{" "} 
                <Text style = {scoreStyles.textGreen}>{ question.userAnswer}</Text>
                . This answer was correct!</Paragraph>
            </View> :
            <View style = {{flexDirection:"column",alignItems:"center", width:"85%", padding:24}}>
                <Paragraph>Your answer was{" "}
                <Text style = {scoreStyles.textRed}>{ !question.userAnswer? "blank":question.userAnswer}</Text>
                . This answer was incorrect. The correct answer is{" "} 
                <Text style = {scoreStyles.textGreen}>{question.answer} </Text> 
                </Paragraph>
            </View>
    )
}

