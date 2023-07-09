import React from "react";
import PostForm from "../components/PostForm";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPost, updatePost } from "../../api/Posts";

const EditPost = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
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

    const updatePostMutation = useMutation({
        mutationFn: updatePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            navigate("/");
        },
    });

    if (isLoading) return "loading...";
    if (isError) return `Error: ${error.message}`;

    const handleSubmit = (updatedpost) => {
        updatePostMutation.mutate({ id, ...updatedpost });
    };
    return (
        <div>
            <h1>Edit post</h1>
            <PostForm
                initialValues={post}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default EditPost;
