import React from "react";
import PostForm from "./PostForm";
import { v4 as uuidv4 } from "uuid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../../api/Posts";

const AddPost = () => {
    const queryClient = useQueryClient();

    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
    });

    const addPost = (post) => {
        createPostMutation.mutate({
            id: uuidv4(),
            ...post,
        });
    };
    return (
        <div>
            <h2 className="add-new">Add new Post</h2>
            <PostForm onSubmit={addPost} />
        </div>
    );
};

export default AddPost;
