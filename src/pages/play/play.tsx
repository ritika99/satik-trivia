import { useEffect, useState } from "react";
import { CountDown } from "../../components/CountDown/CountDown";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { useQuiz } from "../../context/QuizContext";

export const Play = () => {
    const {state: {quizzes, questionNumber, selectedQuizIndex, score}, dispatch} = useQuiz();
    const {quizName, questions} = quizzes[selectedQuizIndex];
    const [displayCountdown, setDisplayCountdown] = useState(true);

    const optionSelectedHandler = (isRight: boolean): void => {
        isRight && dispatch({type: "INCREASE_SCORE"})
        dispatch({type: "INCREASE_QUESTION_NUMBER"})
    }

    const emojiSwitcher = () => {
        const percentage: number = (score/(questions.length*5))*100;
        if(percentage>70){
            return(<i className="fas fa-grin-hearts"></i>)
        }else if(percentage>40){
            return(<i className="far fa-grin"></i>)
        }else{
            return(<i className="fas fa-frown"></i>)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setDisplayCountdown(false)
        }, 5000);
    }, [])

    return(
        <div>
            {displayCountdown && <CountDown />}
            <div className="h-screen bg-opacity-95 bg-black		text-gray-50 p-8 flex justify-center ">
                <div className="relative lg:w-3/4">
                <div className="pb-8">
                    <div className="flex justify-between">
                        <h3 className="quiz-section quiz-title font-extralight text-gray-400">{quizName}</h3>
                        <span className="text-yellow-600 font-normal ">{emojiSwitcher()}<span className="text-gray-600 text-lg"> {score}</span></span>
                    </div>
                    <h2 className="quiz-question-counter text-yellow-600 font-light	text-3xl">Question <span className="text-4xl font-bold">{questionNumber}</span><span className="font-extralight text-gray-50"> / {questions.length}</span></h2>
                    <ProgressBar questionNumber={questionNumber-1} totalQuestions={questions.length}/>
                </div>
            <div>
                <p className="sm:text-2xl">{questions[questionNumber - 1].name}</p>
                {questions[questionNumber - 1].image && <img className="mt-6 max-h-48 lg:max-h-64 w-full	max-w-lg rounded m-auto" src={questions[questionNumber - 1].image} alt="question-img"/>}
                <div className="grid grid-rows-4 gap-2 py-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-4">
                    {questions[questionNumber - 1].options.map(option => (
                        <div className="cursor-pointer border-gray-600 p-2 px-4 border-l-8 border sm:p-3 hover:border-yellow-600" onClick={() => optionSelectedHandler(option.isRight)}>{option.text}</div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between absolute bottom-0 right-0	left-0	">
                <button className="cursor-pointer rounded uppercase border-2 text-gray-500 border-yellow-600 py-1 px-5 transition duration-700 ease-in-out hover:bg-yellow-600 hover:text-black font-semibold" onClick={() => dispatch({type: "INCREASE_QUESTION_NUMBER"})} disabled={questionNumber>=questions.length? true: false}>Skip<i className="fas fa-arrow-right pl-2"></i>
                </button>
                <button className="cursor-pointer rounded uppercase border-2 border-red-700 opacity-50 text-red-700 py-1 px-6 transition duration-700 ease-in-out hover:bg-red-700 hover:text-black hover:opacity-100 font-bold">{questionNumber===questions.length? "Submit":"Quit"}</button>
            </div>
                </div>
            </div>
        </div>
    )
} 