import { combineReducers } from 'redux'
import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, INIT_QUESTIONS, RESET_QUIZ, SECOND_PASSED, START_GAME, ASK_SUBMISSION} from './actions'



function score (state = 0, action = {}){
    switch(action.type){
        case SUBMIT:
            action.payload.questions.forEach(question => {
                state = question.answer === question.userAnswer ? state + 1: state
            });
            return state;
        case SECOND_PASSED:
            if(action.payload.secondsLeft === 1){
                action.payload.questions.forEach(question => {
                    state = question.answer === question.userAnswer ? state + 1: state
                });
            }
            return state;    
        case RESET_QUIZ:
            return 0;
        default:
            return state;
    }
}

function finished (state = false, action = {}){
    switch(action.type){
        case SUBMIT:
            return true;
        case SECOND_PASSED:
            if(action.payload.secondsLeft === 1){
                return true;
            }
            return state;       
        case RESET_QUIZ:
            return false;         
        default:
            return state;
    }
}

function started (state = false, action = {}){
    switch(action.type){
        case START_GAME:
            return action.payload.start;       
        default:
            return state;
    }
}

function currentQuestion (state = 0, action = {}){
    switch(action.type){
        case CHANGE_QUESTION:
            return action.payload.index + action.payload.move ;
        case RESET_QUIZ:
        case INIT_QUESTIONS:
        case START_GAME:     
            return 0; 
        default:
            return state;
    }
}

function questions (state = [], action = {}){
    switch(action.type){
        case QUESTION_ANSWER:
            return state.map((question, i) => {
                return { ...question,
                            userAnswer: action.payload.index === i ?
                            action.payload.answer : question.userAnswer
                }
            });
        case SUBMIT:
            return state.map((question, i) => {
                return { ...question,
                            correct: question.answer === question.userAnswer 
                }
            });
        case RESET_QUIZ:    
        case INIT_QUESTIONS:
            return action.payload.questions
        default:
            return state;
    }
}

function buttonsState(state = [false, true], action = {}){
    switch(action.type){
        case CHANGE_QUESTION:
            return [
                action.payload.index + action.payload.move > 0,
                action.payload.index + action.payload.move + 1 < action.payload.count]
        case RESET_QUIZ:
            return [false, true];        
        default:
            return state;
    }
}

function seconds (state = 300, action = {} ){
    switch(action.type){
        case RESET_QUIZ:
        case INIT_QUESTIONS:
        case START_GAME:    
            return 300
        case SECOND_PASSED:
            if(action.payload.started){
                return state > 0 ? state - 1 : state ;
            } else{
                return state;
            }
        case SUBMIT:
            return 0;  
        default:
            return state;              
    }
}




const GlobalState = (combineReducers({
    score,
    finished,
    started,
    currentQuestion,
    questions,
    buttonsState,
    seconds,
}));



export default GlobalState