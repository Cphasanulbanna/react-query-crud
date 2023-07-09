import React from "react";
import { Route, Routes } from "react-router-dom";
import PostLists from "./pages/PostLists";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<PostLists />}
                />
                <Route
                    path="/post/:id"
                    element={<Post />}
                />
                <Route
                    path="/post/:id/edit"
                    element={<EditPost />}
                />
            </Routes>
        </div>
    );
}

export default App;
