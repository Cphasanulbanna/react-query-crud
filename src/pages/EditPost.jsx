import React from "react";
import PostForm from "../components/PostForm";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const EditPost = () => {
    const { id } = useParams();
    const {
        isLoading,
        isError,
        data: post,
        error,
    } = useQuery({
        queryKey: ["posts", id],
        queryFn: () => fetchPost(id),
    });

    if (isLoading) return "loading...";
    if (isError) return `Error: ${error.message}`;
    return (
        <div>
            <h1>Edit post</h1>
            <PostForm />
        </div>
    );
};

export default EditPost;
