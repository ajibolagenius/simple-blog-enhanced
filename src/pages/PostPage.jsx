import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

/**
 * PostPage component fetches and displays a single post along with its comments.
 *
 * This component uses the `useParams` hook to get the `postId` from the URL,
 * and fetches the post data from an API. It also handles loading and error states.
 *
 * Users can add new comments to the post, which are displayed in the comments section.
 *
 * @component
 * @example
 * return (
 *   <PostPage />
 * )
 */
const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                setPost(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    const handleNewComment = (commentText) => {
        const newComment = {
            id: comments.length + 1,
            postId: parseInt(postId),
            name: 'Current User',
            body: commentText
        };
        setComments([newComment, ...comments]);
    };

    if (loading) return <div className="loading-state">Loading post...</div>;
    if (error) return <div className="error-state">Error: {error.message}</div>;
    if (!post) return <div className="error-state">Post not found</div>;

    return (
        <div className="post-wrapper">
            <article>
                <h1 className="post-title">{post.title}</h1>
                <p className="post-body">{post.body}</p>
            </article>
            <section className="comments-section">
                <h2>Comments</h2>
                <CommentForm onSubmit={handleNewComment} />
                <CommentList postId={postId} comments={comments} />
            </section>
        </div>
    );
};

export default PostPage;
