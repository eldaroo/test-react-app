import React, { Component } from 'react';

class LoginHeader extends Component {
    render() {
        return (
            <div>
                <img
                    className="logo"
                    src={require('../../images/buda.png')}
                />
                <h3>Applicants Tracking System</h3>
            </div>
        );
    }
}

export default LoginHeader;
