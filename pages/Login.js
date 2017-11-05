import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import { loginUser,login } from '../redux/actions/auth';
import { Hoshi } from 'react-native-textinput-effects';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    userLogin (e) {
        console.log('Pressed!!')
        console.log('email:', this.state.email)
        console.log('password', this.state.password)
        console.log('')
        this.props.onLogin(this.state.email, this.state.password);
        e.preventDefault();
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    Login
                </Text>
                <Hoshi
                  label={'Username'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  value={this.state.email} 
                  onChangeText={(text) => this.setState({ email: text })}
                  />

                <Hoshi
                  label={'Password'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  value={this.state.password} 
                  onChangeText={(text) => this.setState({ password: text })}
                />
                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.userLogin(e)} title="Login"/>
            </ScrollView>
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
        onLogin: (email, password) => { dispatch(loginUser(email, password)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);