import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
                setComments(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [postId]);

    if (loading) return <div className="loading-state">Loading comments...</div>;
    if (error) return <div className="error-state">Error: {error.message}</div>;

    return (
        <ul className="comment-list">
            {comments.map((comment) => (
                <li key={comment.id} className="comment-item">
                    <h3 className="comment-title">{comment.name}</h3>
                    <p className="comment-body">{comment.body}</p>
                </li>
            ))}
        </ul>
    );
};

export default CommentList;
