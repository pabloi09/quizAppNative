import React from 'react'

import { errorStyles } from './styles'
import error from '../assets/error.gif'

import {View, Image,Linking} from "react-native"
import {Title,Paragraph, Button, Card} from "react-native-paper"


export default class Error extends React.Component {

    render(){

        return(
            <View style = {errorStyles.homeRoot}>
                <Card style = {errorStyles.paper}>
                    <Title>
                       Error:
                    </Title>
                    <Paragraph>
                       {this.props.error}
                    </Paragraph>                   
                    <Image source = {error} style={errorStyles.gif} alt = "error"/>
                </Card>
                <Card style = {errorStyles.paper}>
                    <Paragraph> We are sorry. Try again later, if the error persist you can&nbsp;</Paragraph>  
                    <Button onPress ={()=>Linking.openURL("mailto:pablo.arribas100@gmail.com")}>Contact us</Button>
                    <Paragraph>You can also</Paragraph>                
                    <Button onPress ={()=>this.props.navigation.goBack()}>Go back to the home page</Button>
                </Card>
            </View> 
        )
    }
}

