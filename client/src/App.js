import React from 'react';
import { NotificationContainer } from 'react-notifications';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
    return (
        <div className="container">
            <h1>Create post!!!!!!</h1>
            <PostCreate />
            <hr />
            <h1>Posts</h1>
            <PostList />
            <NotificationContainer />
        </div>
    );
}

export default App;