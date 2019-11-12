import React from 'react';
import Game from './Game'
import { questionAnswer, changeQuestion, submit, initQuestions, startGame, resetQuiz, secondPassed} from '../../redux/actions'
import ScoreView from './ScoreView'
import Error from "../Error"
import { connect } from 'react-redux'
import { View, AsyncStorage, Platform, Alert, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import MyAppBar from "../MyAppBar"





class Play extends React.Component {

  render(){
    let actions = {reset:this.resetQuestions.bind(this), save: this._saveQuiz.bind(this), restore: this._restoreQuiz.bind(this), delete: this._deleteQuiz.bind(this)}
        return(
        <KeyboardAvoidingView>   
            <MyAppBar actions={actions} seconds = {this.props.seconds} finished = {this.props.finished} started = {this.props.started} toggleDrawer = {this.props.navigation.openDrawer} />  
              {this.props.finished ? 
              <ScoreView score = {this.props.score} questions = {this.props.questions}/>:
              (this.props.questions && this.props.questions.length > 0)?
                <Game
                      question = { this.props.questions[this.props.currentQuestion] }
                      currentQuestion = { this.props.currentQuestion }
                      onQuestionAnswer = { (answer) => {
                          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                      }}
                      onNextClicked = { () =>  this.props.dispatch(changeQuestion(this.props.currentQuestion, 1, this.props.questions.length))}
                      onPreviousClicked = { () =>  this.props.dispatch(changeQuestion(this.props.currentQuestion, -1, this.props.questions.length))}
                      onSubmit = { () => this.props.dispatch(submit(this.props.questions))}
                      buttonsState = { this.props.buttonsState }
                      resolveQuestion = { (move) =>  this.props.dispatch(changeQuestion(this.props.currentQuestion, move, this.props.questions.length)) }
                      numberOfQuestions = {this.props.questions.length} />:
                    <Error error = "We can't retrieve the quiz"/>    } 
        </KeyboardAvoidingView> );
  }



  componentDidMount(){
    downLoadQuestionsToJson()
    .then(json => this.props.dispatch(initQuestions(json)))
    this.props.dispatch(startGame(true))
    let id=setInterval(()=>this.props.dispatch(secondPassed(this.props.seconds, this.props.questions, this.props.started)),1000);
    this.setState({id})
  }

  componentWillUnmount(){
    clearInterval(this.state.id)
    this.props.dispatch(startGame(false))
  }

  async _saveQuiz(){
    try {
      await AsyncStorage.setItem('@P2_2019_IWEB:quiz',JSON.stringify(this.props.questions));
        this.showFeedback("Saved succesfully")
      } catch (error) {
        this.showToast("Error saving")
      }
  }

  async _restoreQuiz(){

    try {
      var quiz = await AsyncStorage.getItem('@P2_2019_IWEB:quiz');
      if(quiz!=null){
        this.props.dispatch(resetQuiz(JSON.parse(quiz)))
        this.showFeedback("Restored succesfully")
      }else{
        this.showFeedback("There are no quizzes saved")
      }
      } catch (error) {
        this.showFeedback("Error restoring")
      }
  }

  async _deleteQuiz(){
    try {
      await AsyncStorage.removeItem('@P2_2019_IWEB:quiz');
      this.showFeedback("Deleted succesfully")
      } catch (error) {
        this.showFeedback("Error deleting")
      }
  }

  resetQuestions(){
    downLoadQuestionsToJson()
    .then(json => this.props.dispatch(resetQuiz(json)))
    }

  showToast(text){
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }
  
  showPushNotification(text){
    Alert.alert(
      text,
      "",
      {cancelable: true},
    );
  }

  showFeedback(text){
    if(Platform.OS === "android"){
      this.showToast(text)
    } else{
      this.showPushNotification(text)
    }
  }


}

const downLoadQuestionsToJson = function() {
  return fetch("https://quiz.dit.upm.es/api/quizzes/random10wa?token=6bb259eede7bacdc5aab")
         .then(res => res.json())
}

const mapStateToProps = function(state){
  return {
    ...state
  };
}

export default connect(mapStateToProps)(Play);
