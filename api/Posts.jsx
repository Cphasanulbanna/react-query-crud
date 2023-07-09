export const fetchPosts = async () => {
    const resposne = await fetch("http://localhost:3000/posts");
    return resposne.json();
};
