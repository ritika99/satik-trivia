import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="background text-gray-50 flex items-center">
            <div className="p-14 bg-gradient-to-r from-black to-transparent">
                <h1 className="text-4xl lg:text-5xl">Test your <strong className="text-yellow-600 ">MAKEUP</strong> IQ</h1>
                <Link to="/quiz">
                    <button className="cursor-pointer rounded uppercase border-2 border-yellow-600 py-3 px-4 mt-4 animate-pulse transition duration-700 ease-in-out hover:bg-yellow-600 hover:text-black">Start Quiz</button>
                </Link>
            </div>
        </div>
    )
}