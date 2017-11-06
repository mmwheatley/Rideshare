import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Secured from './Secured';
import Register from './Register';

class Application extends Component {
    render() {
        // if (this.props.isLoggedIn) {
        //     return <Secured />;
        // } else {
        //     return <Login />;
        // }
        switch (this.props.navi_page){
            case 'loginPage':
                return <Login />;
            case 'securedPage':
                return <Secured />;
            case 'registerPage':
                return <Register />;
            default:
                return <Login />;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        navi_page: state.auth.navi_page
    };
}

export default connect(mapStateToProps)(Application);
