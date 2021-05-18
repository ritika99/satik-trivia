import { Routes, Route } from "react-router-dom";
import { Play } from "../pages";
import { Home } from "../pages/home/home";

export const Router = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Play />} />
    </Routes>)
}