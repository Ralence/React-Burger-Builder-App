import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxilliary';
import classes from './layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDraver/SideDrawer';

class Layout extends React.Component {
    state = {
        showSideDrawer: false,
    }

    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState({ showSideDrawer: !this.state.showSideDrawer });
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    isAuthenticated={this.props.isAuthenticated}
                    toggle={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuthenticated={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler}
                    toggle={this.sideDrawerToggleHandler} />
                <main className={classes.Content} >
                    {this.props.children}
                </main>
            </Aux>)
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}


export default connect(mapStateToProps)(Layout);