import React from 'react';
import MyCard from '../MyCard/MyCard'
import { IconButton, TextInput, FAB} from 'react-native-paper';

import { gameStyles }  from '../styles'

import ConfirmSubmitDialog from './ConfirmSubmitDialog';
import QuestionsIndex from './QuestionsIndex';
import {View} from "react-native"


export default class Game extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            dialogOpened: false
        }
    }

    render(){
        
        return (
            
            <View style = {gameStyles.game}>
                    <MyCard  question = {this.props.question} currentQuestion = {this.props.currentQuestion}/>
                    <View style = {gameStyles.navigation}>
                        <IconButton  disabled = {!this.props.buttonsState[0]} onPress = {this.props.onPreviousClicked} icon ="navigate-before"/>
                        <QuestionsIndex numberOfQuestions = {this.props.numberOfQuestions } resolveQuestion = {(move) => this.props.resolveQuestion(move)} currentQuestion = {this.props.currentQuestion} />  
                        <IconButton disabled = {!this.props.buttonsState[1]} onPress = {this.props.onNextClicked} icon ="navigate-next"/>
                    </View>
                    
                <View style = {gameStyles.answer}>
                    <TextInput label="Answer" style={ gameStyles.textField } mode="outlined" value = { this.props.question? this.props.question.userAnswer || "":"" }
                    onChangeText = { (e) => this.props.onQuestionAnswer(e) }/>
                    <FAB icon="done"  aria-label="submit" label="Submit" style={gameStyles.fab} onPress = {()=>ConfirmSubmitDialog(this.props.onSubmit)}/> 
                </View>
                       
            </View>
          );

    }

    

    


    
    

    
}



