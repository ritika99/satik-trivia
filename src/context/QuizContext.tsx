import { createContext, FC, useContext, useReducer } from "react";
import { quizlist } from "../data";
import { Action, InitialStateType, QuizContextType } from "./QuizContext.types";

const initialState = {
    quizzes: quizlist,
    questionNumber: 1,
    selectedQuizIndex: 0
}

const initialContext = {
    state: initialState,
    dispatch: () => null
}

const QuizContext = createContext<QuizContextType>(initialContext);

export const quizQuestionReducer = (state: InitialStateType, action: Action) => {
    switch(action.type) {
        case "INCREASE_QUESTION_NUMBER":
            return {...state, questionNumber: state.questionNumber+1}
        case "RESET":
            return {...state, questionNumber: 1}
        default: 
            return state
    }
}

export const QuizContextProvider: FC = ({children}) => {
    const [state, dispatch] = useReducer(quizQuestionReducer, initialState);

    return (
        <QuizContext.Provider value={{state, dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

export const useQuiz = () => {
    return useContext(QuizContext);
}