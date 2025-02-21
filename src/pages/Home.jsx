import React from 'react';
import PostList from '../components/PostList';

/**
 * Home component that displays a list of blog posts.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
const Home = () => {
    return (
        <div className="content-container">
            <h1 className="post-title">Blog Posts</h1>
            <PostList />
        </div>
    );
};

export default Home;
