import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({notif}) => (
    <p className={styles.notif}>{notif}</p>
)

Notification.propTypes ={
    notif: PropTypes.string.isRequired,
}

export default Notification;