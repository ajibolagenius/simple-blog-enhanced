import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div className="loading-state">Loading...</div>;
    if (error) return <div className="error-state">Error: {error.message}</div>;

    return (
        <ul className="post-list">
            {posts.map((post) => (
                <li className="post-item" key={post.id}>
                    <p className='post-id-serial'>{post.id}. </p>
                    <Link to={`/post/${post.id}`} className="post-link">
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default PostList;
