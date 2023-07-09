import React, { useState } from "react";

const PostForm = () => {
    const [posts, setPosts] = useState({
        title: "",
        body: "",
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setPosts({ ...posts, [name]: value });
    };
    const renderFields = (label) => (
        <div className="input-container">
            <label>{label}</label>
            <input
                type="text"
                name={label.toLowerCase()}
                placeholder={`Enter ${label.toLowerCase()}`}
                value={posts[label.toLowerCase()]}
                onChange={handleChange}
            />
        </div>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("form submitted");
        setPosts({
            title: "",
            body: "",
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            {renderFields("Title")}
            {renderFields("Body")}
            <button type="submit">submit</button>
        </form>
    );
};

export default PostForm;
