import React from 'react';
import PostList from '../components/PostList';

const Home = () => {
    return (
        <div className="content-container">
            <h1 className="post-title">Blog Posts</h1>
            <PostList />
        </div>
    );
};

export default Home;
