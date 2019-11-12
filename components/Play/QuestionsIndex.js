import React from "react"
import {Slider} from "react-native"

// This resolves to nothing and doesn't affect browser history
const dudUrl = '#';

export default class QuestionsIndex extends React.Component {

    render() {
        
        return (
            <Slider 
                minimumValue={0}
                style={{width:"70%"}}
                maximumValue={this.props.numberOfQuestions-1}
                minimumTrackTintColor="#64ffda"
                maximumTrackTintColor="#ffffff"
                thumbTintColor="#64ffda"
                step={1}
                value={this.props.currentQuestion}
                onValueChange = { value => this.props.resolveQuestion(value - this.props.currentQuestion)}/>
        );
    }

}
