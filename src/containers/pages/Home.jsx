import React, { Component } from 'react';
import { MasterLayout } from '../../components/layouts';

import { authContext } from '../../adalConfig';

class Home extends Component {
    authenticateToken = () => {
        if (authContext.getCachedUser()) {
            // If we have a cached login, use it
            return true
        }
    
        if (authContext.isCallback(window.location.hash)) {
            // This happens after the AD login screen,
            // handleWindowCallback will use the hash to
            // complete the login
            authContext.handleWindowCallback()
            return true
        }
    
        // Not logged in
        return false
    }
    render() {
        return (
            <MasterLayout activeLink="home">
                <div className="container home-page">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1" style={{backgroundColor: 'azure'}}>
                            <div className="page-header">
                                <h1>Todo List</h1>
                            </div>
                            <p>This sample demonstrates how to take advantage of ADAL JS for adding Azure AD authentication to your
                AngularJS apps.</p>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        );
    }
}

export default Home
