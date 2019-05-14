import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleBtn from '../../UI/ToggleBtn/ToggleBtn';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div style={{color: "white"}}>
            <ToggleBtn toggle={props.toggle} />
              <p className={classes.DesktopOnly} >MENU</p>
        </div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;