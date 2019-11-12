import React from 'react';
import { gameStyles } from '../styles'
import {Card, Avatar,Title} from "react-native-paper"



export default class MyCardHeader extends React.Component {
    render(){
        return (
            <Card.Content style={{display: "flex", flexDirection: "row", alignItems:"center", marginVertical: 12}} > 
                <Avatar.Text style={gameStyles.avatar}
                            size={50}
                            label={this.props.currentQuestion+1}/>
                <Title style={{width:"80%"}}>{this.props.question}</Title>
            </Card.Content>  

        );
    }
    

    
}

