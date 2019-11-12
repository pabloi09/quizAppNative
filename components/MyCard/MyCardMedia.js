import React from 'react';
import {Card} from "react-native-paper"
import { gameStyles } from '../styles'



export default class MyCardMedia extends React.Component {

    render(){
        return(
            <Card.Cover source= {{ uri: this.props.url }}/>
        );
    }
}

