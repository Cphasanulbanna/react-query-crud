export const fetchPosts = async () => {
    const resposne = await fetch("http://localhost:3000/posts");
    return resposne.json();
};

export const fetchPost = async (id) => {
    const resposne = await fetch(`http://localhost:3000/posts/${id}`);
    return resposne.json();
};

export const createPost = async (newPost) => {
    const resposne = await fetch(`http://localhost:3000/posts/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    });
    return resposne.json();
};
