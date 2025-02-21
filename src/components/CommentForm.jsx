/**
 * A React component that renders a form for submitting comments.
 *
 * The `CommentForm` component takes an `onSubmit` function prop, which is called with the comment text when the form is submitted.
 *
 * The component renders a textarea for the user to enter their comment, and a submit button that is disabled if the comment is empty.
 *
 * @param {object} props - The component props.
 * @param {function} props.onSubmit - A function to be called when the comment form is submitted.
 * @returns {JSX.Element} The rendered comment form.
 */

import { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            onSubmit(comment);
            setComment('');
        }
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <textarea
                className="comment-input"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                rows="3"
            />
            <button
                type="submit"
                className="comment-submit-btn"
                disabled={!comment.trim()}
            >
                Post Comment
            </button>
        </form>
    );
};

export default CommentForm;
