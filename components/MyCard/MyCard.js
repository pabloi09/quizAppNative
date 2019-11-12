import React from 'react';
import { Card } from 'react-native-paper';
import { gameStyles } from '../styles';
import MyCardHeader from './MyCardHeader';
import MyCardMedia from './MyCardMedia';
import MyFooter from './MyFooter/MyFooter';

export default class MyCard extends React.Component {

    
    
    render(){
        return (
        <Card style={gameStyles.card}>
          <MyCardHeader question = {this.props.question.question} currentQuestion = {this.props.currentQuestion} />
          <MyCardMedia url = { this.props.question.attachment ? this.props.question.attachment.url : "https://blog.hubspot.com/hubfs/google-quiz.jpg"} />
          <MyFooter question = {this.props.question} tips= {this.props.question.tips} authorInfo = { {url:this.props.question.author.photo.url, name: this.props.question.author.username } }/>
        </Card>
        );
    }

    
}
