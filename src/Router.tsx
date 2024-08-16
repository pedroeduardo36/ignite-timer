import { History } from "./pages/History";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export function Router() {
    return (
       <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/History" element={<History />}/>
       </Routes>
    )
}