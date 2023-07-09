import React from "react";
import { Route, Routes } from "react-router-dom";
import PostLists from "./pages/PostLists";

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<PostLists />}
                />
            </Routes>
        </div>
    );
}

export default App;
