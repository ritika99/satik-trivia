import { useState } from "react";
import { useQuiz } from "../../context/QuizContext";
import { Option } from "../../data";

export const Play = () => {
    const {state: {quizzes, questionNumber, selectedQuizIndex}, dispatch} = useQuiz();
    const {quizName, questions} = quizzes[selectedQuizIndex];
    const [scoreArray, setScoreArray] = useState([]);
    const [missingArray, setMissingArray] = useState([]);
    const [displayScore, setDisplayScore] = useState(false);

    const optionSelectedHandler = (isRight: boolean, product: any): void => {
        if(isRight){
            setScoreArray(scoreArray.concat(product));
        } else{
            setMissingArray(missingArray.concat(product));
        }
        dispatch({type: "INCREASE_QUESTION_NUMBER"})
        if(questionNumber===questions.length){
            setDisplayScore(true)
        }
    }

    const skipQuestionHandler = (product:any) => {
        setMissingArray(missingArray.concat(product));
        dispatch({type: "INCREASE_QUESTION_NUMBER"})
        setDisplayScore(true)
    }

    const showScore = () => {
        if(questionNumber===questions.length){
            setDisplayScore(true)
        }
        dispatch({type: "RESET"})
    }

    return(
        <div>
            <h3 className="quiz-section quiz-title">{quizName}</h3>
            <h2 className="quiz-question-counter"><strong>Question </strong>{questionNumber}<span>/{questions.length}</span></h2>
            <div>
                <p>{questions[questionNumber - 1].name}</p>
                {questions[questionNumber - 1].image && <img src={questions[questionNumber - 1].image} alt="question-img"/>}
                <div>
                    {questions[questionNumber - 1].options.map(option => (
                        <h3 onClick={() => optionSelectedHandler(option.isRight, questions[questionNumber - 1].product)}>{option.text}</h3>
                    ))}
                </div>
            </div>
            <button onClick={() => skipQuestionHandler(questions[questionNumber - 1].product)} disabled={questionNumber>=questions.length? true: false}>Skip</button>
            <button onClick={showScore}>{questionNumber===questions.length? "Submit":"Quit"}</button>
            {displayScore && <div> <h1>You have this is your makeup kit</h1>
            {scoreArray.map(item=>(<span>{item} </span>))}
            <h1>Opps! you miss</h1>
            {missingArray.map(item=>(<span>{item} </span>))} </div>}
        </div>
    )
} 