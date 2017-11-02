import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import { login } from '../redux/actions/auth';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    userLogin (e) {
        this.props.onLogin(this.state.username, this.state.password);
        e.preventDefault();
    }

    render() {
        return (
            <View style={{padding: 20}}>
                <View style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    Login
                </Text>
                </View> 
                <TextInput 
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder='Username' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='email-address' 
                    value={this.state.username} 
                    onChangeText={(text) => this.setState({ username: text })} />

                <TextInput 
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder='Password' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    secureTextEntry={true} 
                    value={this.state.password} 
                    onChangeText={(text) => this.setState({ password: text })} />
                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.userLogin(e)} title="Login"/>
            </View>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);