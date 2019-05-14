import React from 'react';
import classes from './ToggleBtn.module.css';

const toggleBtn = (props) => (
    <button className={classes.Button}
        onClick={props.toggle}>
        <div></div>
        <div></div>
        <div></div>
        {props.children}
    </button>
)

export default toggleBtn;