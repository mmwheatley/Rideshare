import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import { loginUser,login, cleanError, onRegister, logout} from '../redux/actions/auth';
import { Hoshi } from 'react-native-textinput-effects';

class Secured extends Component {

    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <View style={{margin: 10}}/>

                <Hoshi
                  label={'Email'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  // value={this.state.email} 
                  keyboardType='email-address'
                  autoCapitalize='none'
                  // onChangeText={(text) => this.setState({ email: text })}
                  />
                <Hoshi
                  label={'Password'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  // value={this.state.email} 
                  autoCapitalize='none'
                  // onChangeText={(text) => this.setState({ email: text })}
                  />

                <Hoshi
                  label={'First Name'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  autoCapitalize='none'
                  // value={this.state.password} 
                  // onChangeText={(text) => this.setState({ password: text })}
                />
                <Hoshi
                  label={'Last Name'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  autoCapitalize='none'
                  // value={this.state.password} 
                  // onChangeText={(text) => this.setState({ password: text })}
                />
                <Hoshi
                  label={'Mobile Number'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  autoCapitalize='none'
                  // value={this.state.password} 
                  // onChangeText={(text) => this.setState({ password: text })}
                />

                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.uploadRegisterInfo(e)} title="Register"/>
                <Button onPress={(e) => this.userLogout(e)} title="Back to previous page"/>
            </ScrollView>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        email: state.register.email,
        password: state.register.password,
        firstName: state.register.firstName,
        lastName: state.register.lastName,
        mobileNumber: state.register.mobileNumber
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Secured);