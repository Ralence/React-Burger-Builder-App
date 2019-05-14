import React from 'react';
import NavigationItem from './NavigatoionItem/NavigationItem';

import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active >Burger Builder</NavigationItem>
        <NavigationItem link="/">Chechout</NavigationItem>
    </ul>

);

export default navigationItems;