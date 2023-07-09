import React from "react";
import AddPost from "../components/AddPost";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../api/Posts";

const PostLists = () => {
    const {
        isLoading,
        isError,
        data: posts,
        error,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });

    console.log(posts, "posts");

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
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <div className="btn-box">
                            <button>edit</button>
                            <button>delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostLists;
