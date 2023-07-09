import React from "react";
import AddPost from "../components/AddPost";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPosts } from "../../api/Posts";
import { Link } from "react-router-dom";

const PostLists = () => {
    const queryClient = useQueryClient();
    const {
        isLoading,
        isError,
        data: posts,
        error,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });

    const deletePostMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
    });

    const handleDeletePost = (id) => {
        deletePostMutation.mutate(id);
    };

    if (isLoading) return "loading...";
    if (isError) return `Error: ${error.message}`;

    return (
        <div>
            <AddPost />
            <h1>Lists</h1>
            <div>
                {posts?.map((post) => (
                    <div
                        className="post"
                        key={post.id}
                    >
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                        <p>{post.body}</p>
                        <div className="btn-box">
                            <Link
                                className="btn"
                                to={`/post/${post.id}/edit`}
                            >
                                edit
                            </Link>
                            <button
                                onClick={() => handleDeletePost(post.id)}
                                className="btn"
                            >
                                delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostLists;
