import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import { loginUser,login, cleanError } from '../redux/actions/auth';
import { Hoshi } from 'react-native-textinput-effects';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: 'uwzhuboyuan@gmail.com',
            password: ''
        };
    }

    userLogin (e) {
        console.log('Pressed!!')
        this.props.onLogin(this.state.email, this.state.password);
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
                <Button onPress={(e) => this.userLogin(e)} title="Register"/>
            </ScrollView>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        sysAlert: state.auth.sysAlert,
        errorFlag: state.auth.errorFlag
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => { dispatch(loginUser(email, password)); },
        cleanErrorStatus: () => {dispatch(cleanError()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);