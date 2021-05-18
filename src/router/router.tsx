import { Routes, Route } from "react-router-dom";
import { Play } from "../pages";
import { Home } from "../pages/home/home";
import { Result } from "../pages/result/result";

export const Router = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Play />} />
        <Route path="/result" element={<Result />} />
    </Routes>)
}