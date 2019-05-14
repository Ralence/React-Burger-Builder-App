import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let openClass = props.open ? classes.Open : classes.Close;

    return (
        <React.Fragment>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={[classes.SideDrawer, openClass].join(' ')}>
                
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    )
};

export default sideDrawer;