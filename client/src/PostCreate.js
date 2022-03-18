import React, { useState } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
export default () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://posts.com/posts/create', { title })
            .then(res => {
                if (res.data) {
                    NotificationManager.success('Post created successfully')
                    setTitle('');
                }
            });
    }

    return <div>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <input type='text' value={title} onChange={e => setTitle(e.target.value)} className='form-control' id='title' placeholder='Add new post' />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
        
    </div>;
}