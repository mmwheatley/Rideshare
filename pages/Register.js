import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import { logout} from '../redux/actions/auth';
import { register, cleanError} from '../redux/actions/register';
import { Hoshi } from 'react-native-textinput-effects';

class Secured extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: 'uwshang',
            password: '123',
            firstName:'erlie',
            lastName:'shang',
            mobileNumber:'1233221'
        };
    }


    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }

    userRegister(e) {
        this.props.onRegister(this.state.email, this.state.password, this.state.firstName, this.state.lastName, this.state.mobileNumber);
        e.preventDefault();
    }

    componentDidUpdate (prevProps) {
      if (this.props.sysAlert != '' && this.props.errorFlag) {
        alert(this.props.sysAlert);
        console.log('should clean');
        this.props.cleanErrorStatus();
      }
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
                  value={this.state.password} 
                  autoCapitalize='none'
                  onChangeText={(text) => this.setState({ password: text })}
                  />

                <Hoshi
                  label={'First Name'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  autoCapitalize='none'
                  value={this.state.firstName} 
                  onChangeText={(text) => this.setState({ firstName: text })}
                />
                <Hoshi
                  label={'Last Name'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  autoCapitalize='none'
                  value={this.state.lastName} 
                  onChangeText={(text) => this.setState({ lastName: text })}
                />
                <Hoshi
                  label={'Mobile Number'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  autoCapitalize='none'
                  value={this.state.mobileNumber} 
                  onChangeText={(text) => this.setState({ mobileNumber: text })}
                />

                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.userRegister(e)} title="Register"/>
                <Button onPress={(e) => this.userLogout(e)} title="Back to previous page"/>
            </ScrollView>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        sysAlert: state.register.sysAlert,
        errorFlag: state.register.errorFlag
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); },
        onRegister: (email, password, firstName, lastName, mobileNumber) => { dispatch(register(email, password, firstName, lastName, mobileNumber)); },
        cleanErrorStatus: () => {dispatch(cleanError()); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Secured);