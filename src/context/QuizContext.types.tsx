import { Dispatch } from "react";
import { Quiz } from "../data/index";

export type InitialStateType = {
    quizzes: Quiz[];
    questionNumber: number;
    selectedQuizIndex: number;
    score: number;
}

export type QuizContextType = {
    state: InitialStateType;
    dispatch: Dispatch<Action>;
}

export type Action = 
| {type: "INCREASE_SCORE"}
| {type: "INCREASE_QUESTION_NUMBER"}
| {type: "RESET"}