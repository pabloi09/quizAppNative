import React from 'react'
import { authorStyles } from '../styles'

import {Card, Title, Subheading, Avatar, IconButton, Colors} from 'react-native-paper'

import {View, Linking, ScrollView} from "react-native"
import { connect } from 'react-redux'


import AuthorPannels from "./AuthorPannels"
import MyAppBar from "../MyAppBar"




class Author extends React.Component {

    render(){

        return(
            <View  > 
                <MyAppBar reset = {()=>{}} seconds = {0} finished started = {false} toggleDrawer = {this.props.navigation.openDrawer} /> 
                
                <View style = {authorStyles.homeRoot}>
                    <ScrollView style={{width:"100%", height:"100%"}} showsVerticalScrollIndicator={false} contentContainerStyle={authorStyles.scrollRoot}>
                        <Card style = {authorStyles.paper}>
                            <View style = {authorStyles.header}>
                            
                                <Avatar.Image alt = "Pablo Martín Redondo" source = {require("../../assets/author.jpg")} style = {authorStyles.bigAvatar} size={90}></Avatar.Image>
                                <IconButton style={authorStyles.button} aria-label="transcripts"
                                                onPress={ ()=>{ Linking.openURL("https://quizapp-ae57a.firebaseapp.com/static/media/transcripts.53de261b.pdf")} }
                                                icon="school"
                                                color={Colors.black}/>
                                    <IconButton style={authorStyles.button} aria-label="linkedin"
                                                onPress={ ()=>{ Linking.openURL("https://www.linkedin.com/in/pablo-mart%C3%ADn-redondo-07b856108/")} }
                                                icon={require('../../assets/linkedin-box.png')}
                                                color={Colors.blue500}/>
                                    <IconButton style={authorStyles.button} aria-label="mail me" 
                                                onPress={ ()=>{ Linking.openURL("mailto:pablo.arribas100@gmail.com")} }
                                                icon="mail"
                                                color={Colors.red500}/>
                                    
                                </View>    
                                <View>
                                    <Title>
                                    Pablo Martín Redondo
                                    </Title>
                                    <Subheading>ETSIT-UPM STUDENT{"\n"}
                                            TELECOMMUNICATIONS ENGINEERING{"\n"}
                                            MADRID, SPAIN | 20 YEARS OLD</Subheading>
                                
                                    
                                </View>
                            
                        </Card>
                        <Card style = {authorStyles.paper}>
                            <AuthorPannels/>
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
export default connect(mapStateToProps)(Author)