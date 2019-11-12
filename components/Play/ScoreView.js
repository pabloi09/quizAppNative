import React from 'react'
import { Text, Card, Title, Subheading} from 'react-native-paper'
import { View, Image, ScrollView } from "react-native"
import { scoreStyles } from '../styles'
import bad from '../../assets/bad.gif'
import normal from '../../assets/normal.gif'
import good from '../../assets/good.gif'
import ExpansionPanelList from './ExpansionPanelList'


export default class ScoreView extends React.Component {

    render(){
        return(
            <View style = {scoreStyles.scoreRoot}>
                 <ScrollView style={{width:"100%", height:"100%"}} showsVerticalScrollIndicator={false} contentContainerStyle={scoreStyles.scrollRoot}>
                    <Card style = {scoreStyles.paper}>
                        <Title>
                            Your score was {this.props.score}.
                        </Title>

                        {getPersonalizedMessage(this.props.score,scoreStyles)}
                        <Subheading >
                            Thank you for playing! Now, you will have the oppotunity to review your answers and compare them with the correct ones. Just expand the pannel corresponing to the question you want to review.
                            To play again, reset the quiz in the up-right corner button.
                        </Subheading>
                    </Card>
                    <Card style = {scoreStyles.paper}>
                        <ExpansionPanelList questions = {this.props.questions} />
                    </Card>
                 </ScrollView>
            </View>
                
        )
    }
}
const getPersonalizedMessage = function (score,scoreStyles) {
    if(score < 5){
            return (
            <View>
                <Text>You need to improve your skills!</Text>
                <Image source = {bad} style={scoreStyles.gif} alt = "bad"/>
            </View>)
    }else if(score < 7){
            return( 
            <View>
                <Text>You are getting better, keep going!</Text>
                <Image source = {normal} style={scoreStyles.gif} alt = "normal"/>
            </View>)
    }else{
        return (
        <View>
            <Text>Congrats!! You are awesome!!</Text>
            <Image source = {good} style={scoreStyles.gif} alt = "good"/>
        </View>)  
    }
}

