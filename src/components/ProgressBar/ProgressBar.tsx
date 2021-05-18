export const ProgressBar = ({questionNumber, totalQuestions}: any) => {
    const fraction: number = (questionNumber/totalQuestions)*100;
    console.log(fraction, questionNumber, totalQuestions)
    return (
        <div className="mt-2 rounded-xl h-1">
            <div className="rounded-xl bg-gradient-to-r from-yellow-600 to-green-600 h-1 transition-all duration-700 ease-linear " style={{width: `${fraction}%`}}></div>
        </div>
    )
}