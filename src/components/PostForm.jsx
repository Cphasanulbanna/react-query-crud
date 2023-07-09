import React, { useState } from "react";

const PostForm = ({ onSubmit, initialValues }) => {
    const [post, setPost] = useState({
        title: initialValues?.title || "",
        body: initialValues?.body || "",
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
        onSubmit(post);
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
