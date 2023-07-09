import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../api/Posts";

const Post = () => {
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
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
