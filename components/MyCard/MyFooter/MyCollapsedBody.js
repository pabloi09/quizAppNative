import React from 'react'
import { gameStyles } from '../../styles'
import {Card, Avatar} from 'react-native-paper';
import {View} from "react-native"


export default class MyCollapsedBody extends React.Component{

    render(){
        return(
            this.props.expanded?
                <Card.Title
                left={(props) => <Avatar.Image {...props} style={gameStyles.bigAvatar} source = {{uri: this.props.authorPhoto}} />}
                title = "Question added by"
                subtitle={this.props.authorName}/>:
                <View/>
        );
    }
}

