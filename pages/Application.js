import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Main from './Secured';
import Post from './Post';
import Result from './Result';
import Register from './Register';
import Verify from './Verify';

class Application extends Component {
    render() {
        switch (this.props.navi_page){
            case 'loginPage':
                return <Login />;
            case 'securedPage':
                switch (this.props.navi_core){
                    case 'main':
                        return <Main />;
                    case 'post':
                        return <Post />;
                    case 'result':
                        return <Result />;
                }
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
        navi_register: state.register.navi_register,
        navi_core: state.core.navi_core
    };
}

export default connect(mapStateToProps)(Application);
