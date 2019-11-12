export const QUESTION_ANSWER = "QUESTION_ANSWER"
export const SUBMIT = "SUBMIT"
export const CHANGE_QUESTION = "CHANGE_QUESTION"
export const INIT_QUESTIONS = "INIT_QUESTIONS"
export const RESET_QUIZ = "RESET_QUIZ"
export const SECOND_PASSED = "SECOND_PASSED"
export const START_GAME = "START_GAME"


export function questionAnswer (index, answer) {
    return { type : QUESTION_ANSWER, payload: { index, answer } };
}

export function changeQuestion (index, move, count) {
    return { type: CHANGE_QUESTION, payload: { index, move, count } }
}

export function submit (questions) {
    return { type: SUBMIT, payload: { questions }}
}

export function initQuestions (questions) {
    return { type: INIT_QUESTIONS, payload: { questions }}
}

export function resetQuiz ( questions ) {
    return { type: RESET_QUIZ, payload: { questions }}
}

export function secondPassed ( secondsLeft, questions, started ) {
    return { type : SECOND_PASSED, payload : {secondsLeft, questions, started} }
}

export function startGame ( start ){
    return {type : START_GAME, payload : { start }}
}

