import React from 'react';
export default ({ comments }) => {
    const renderedComments = comments.map(comment => {
        let content, classes;

        if(comment.status === 'approved') {
            content = comment.content;
            classes = 'badge badge-success';
        }else if(comment.status === 'pending') {
            content = 'This comment is awaiting moderation';
            classes = 'badge badge-warning';
        }else {
            content = 'This comment has been rejected';
            classes = 'badge badge-danger';
        }
        return <li key={comment.id} className={classes}>{content}</li>
    });

    return <ul>
        {renderedComments}
    </ul>
}