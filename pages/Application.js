import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Secured from './Secured';
import Register from './Register';
import Verify from './Verify';

class Application extends Component {
    render() {
        switch (this.props.navi_page){
            case 'loginPage':
                return <Login />;
            case 'securedPage':
                return <Secured />;
            case 'registerPage':
                switch (this.props.navi_register){
                    case 'registerPage':
                        return <Register />;
                    case 'verifyPage':
                        return <Verify />;
                }
            default:
                return <Login />;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        navi_page: state.auth.navi_page,
        navi_register: state.register.navi_register
    };
}

export default connect(mapStateToProps)(Application);
