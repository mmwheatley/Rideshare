import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import { loginUser, cleanError, onRegister } from '../redux/actions/auth';
import { Hoshi } from 'react-native-textinput-effects';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: 'uwzhuboyuan@gmail.com',
            password: '123'
        };
    }

    userLogin (e) {
        console.log('Pressed!!')
        this.props.onLogin(this.state.email, this.state.password);
        e.preventDefault();
    }

    userRegister (e) {
        console.log('try to Register')
        this.props.onRegister();
        e.preventDefault();
    }

    componentDidUpdate (prevProps) {
      if (this.props.sysAlert != '' && this.props.errorFlag) {
        alert(this.props.sysAlert);
        this.props.cleanErrorStatus();
      }
    }


    render() {
        return (
            <ScrollView style={{padding: 30}}>
                <Hoshi
                  label={'Username'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  value={this.state.email} 
                  keyboardType='email-address'
                  autoCapitalize='none'
                  onChangeText={(text) => this.setState({ email: text })}
                  />

                <Hoshi
                  label={'Password'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  autoCapitalize='none'
                  secureTextEntry={true}
                  value={this.state.password} 
                  onChangeText={(text) => this.setState({ password: text })}
                />
                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.userLogin(e)} title="Login"/>
                <Button onPress={(e) => this.userRegister(e)} title="Register"/>
            </ScrollView>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        sysAlert: state.auth.sysAlert,
        errorFlag: state.auth.errorFlag
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => { dispatch(loginUser(email, password)); },
        cleanErrorStatus: () => {dispatch(cleanError()); },
        onRegister: () => {dispatch(onRegister()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);