import React, { useState } from "react";

const PostForm = ({ addPost }) => {
    const [post, setPost] = useState({
        title: "",
        body: "",
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setPost({ ...post, [name]: value });
    };
    const renderFields = (label) => (
        <div className="input-container">
            <label>{label}</label>
            <input
                type="text"
                name={label.toLowerCase()}
                placeholder={`Enter ${label.toLowerCase()}`}
                value={post[label.toLowerCase()]}
                onChange={handleChange}
            />
        </div>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(post);
        setPost({
            title: "",
            body: "",
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            {renderFields("Title")}
            {renderFields("Body")}
            <button
                className="btn"
                type="submit"
            >
                submit
            </button>
        </form>
    );
};

export default PostForm;
