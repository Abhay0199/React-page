import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './leftpannel';
import Dashboard from './Dashboard';

class MainComponent extends Component {
    render() {
        return (
            <div className=''>
                <div class="row row-offcanvas row-offcanvas-left">
                    <Sidebar />
                    <Dashboard />

                </div>
                {/* <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Redirect exact from='/' to="/dashboard" />
                </Switch> */}
            </div>
        );
    }
}

export default MainComponent;