import React from 'react'
import MyCardActions from './MyCardActions';
import MyCardCollapsedBody from './MyCollapsedBody'
import {View} from "react-native"


export default class MyFooter extends React.Component {

    
    constructor(props){
        super(props)
        this.state = {
            expanded : false
        }
        this.handleExpandClick = this.handleExpandClick.bind(this)
    }

    render(){
        return(
            <View>
                <MyCardActions expanded = {this.state.expanded} expandClick = {this.handleExpandClick} tips = {this.props.tips} />  
                <MyCardCollapsedBody expanded = {this.state.expanded} authorPhoto = {this.props.authorInfo.url} authorName = {this.props.authorInfo.name} />
            </View>
        );
    }
    handleExpandClick() {
        this.setState({expanded: !this.state.expanded});
    }
}
