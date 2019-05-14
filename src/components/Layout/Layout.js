import React from 'react';
import Aux from '../../hoc/Auxilliary';
import classes from './layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDraver/SideDrawer';

class Layout extends React.Component {
    state = {
        showSideDrawer: false,
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState({showSideDrawer: !this.state.showSideDrawer});
    }

    render () {
        return (
            <Aux>
                <Toolbar toggle={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.SideDrawerClosedHandler}
                    toggle={this.sideDrawerToggleHandler}/>
                <main className={classes.Content} >
                        {this.props.children}
                </main>
            </Aux>)
    }
}



export default Layout;