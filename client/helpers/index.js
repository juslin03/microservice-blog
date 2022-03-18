import {NotificationContainer, NotificationManager} from 'react-notifications';
export function notify(type, title, message, wait, ...other) {
    // const { NotificationManager } = require('react-notifications');
    NotificationManager[type](message, title, wait ? 5000 : 750, ...other);

}