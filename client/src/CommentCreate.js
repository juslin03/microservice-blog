import React, { useState } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
export default ({ postId }) => {
    const [content, setContent] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://posts.com/posts/${postId}/comments`, { content })
            .then(res => {
                if (res.data) {
                    NotificationManager.info('Comment added successfully')
                    setContent('');
                }
            });
    }

    return <div>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor='comment'>New comment</label>
                <input type='text' value={content} onChange={e => setContent(e.target.value)} className='form-control' id='comment' placeholder='Add a comment to this post' />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
}