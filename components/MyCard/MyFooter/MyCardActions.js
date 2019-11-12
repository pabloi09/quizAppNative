import React from 'react'
import { gameStyles } from '../../styles'

import {IconButton, Card, List} from 'react-native-paper';
import MyTipsDialog from './MyTipsDialog'


export default class MyCardActions extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    render(){
        
        return(
            <Card.Actions disableSpacing>
                    <IconButton  onPress = {()=>MyTipsDialog(this.props.tips,this.handleClick)} icon="help"/>
                    <IconButton
                        onPress={this.props.expandClick}
                        icon="expand-more"/>
                    
                    
            </Card.Actions>
        );
    }
    handleClick(){
        this.setState({open: !this.state.open})
    }

}
