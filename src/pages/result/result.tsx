import { Link } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";

export const Result = () => {
    const {state: {quizzes, score, selectedQuizIndex}} = useQuiz();
    const {questions} = quizzes[selectedQuizIndex];
    const totalScore = (questions.length)*5;
    return (
        <div className="h-screen bg-opacity-95 bg-black	text-gray-50 p-16 relative">
            <div className="flex flex-col items-center">
                <h1 className="font-extralight text-gray-400">Quiz Result</h1>
                <img src="https://www.transparentpng.com/thumb/trophy/wvL2KJ-flowering-golden-medal-image.png" alt="trophy" className="p-4 w-48 md:w-80"/>
                <div className="text-yellow-600 quiz-question-counter  font-light text-3xl pt-4 pb-4">Congratulations!</div>
                <h1 className="text-center pb-12 font-light text-gray-400">Beauty is power, and makeup is something that really enhances that; it’s a woman’s secret.</h1>
                <h1 className="font-extralight text-gray-50 uppercase pb-2">your score</h1>
                <h1 className="text-yellow-600 quiz-question-counter font-semibold text-5xl pb-4">{score} / {totalScore}</h1>
                <Link to="/quiz">
                    <button className="cursor-pointer rounded uppercase border-2 border-yellow-600 py-3 px-4 mt-4 animate-pulse transition duration-700 ease-in-out hover:bg-yellow-600 hover:text-black font-semibold ">Play again</button>
                </Link>
            </div>
        </div>
    )
}