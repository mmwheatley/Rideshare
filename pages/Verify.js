import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button } from 'react-native';
import { goBack,verify, cleanError } from '../redux/actions/register';
import { Hoshi } from 'react-native-textinput-effects';
import { logout} from '../redux/actions/auth';

class Secured extends Component {
    constructor (props) {
        super(props);
        this.state = {
            code: ''
        };
    }

    userGoBack(e) {
        this.props.GoBack();
        e.preventDefault();
    }

    verify(e) {
        this.props.Verify(this.state.code ,this.props.email); 
        e.preventDefault();
    }
    

    componentDidUpdate (prevProps) {
      if (this.props.sysAlert != '' && this.props.errorFlag) {
        alert(this.props.sysAlert);
        console.log('should clean');
        this.props.cleanErrorStatus();
      };
    };


    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    {`please check your mailbox and input verification code`}
                </Text>
                <Hoshi
                  label={'verification code'}
                  borderColor={'#b76c94'}
                  backgroundColor={'#FFF'}
                  autoCorrect={false}
                  keyboardType='number-pad'
                  autoCapitalize='none'
                  onChangeText={(text) => this.setState({ code: text })}
                  />
                <View style={{margin: 20}}/>
                <Button onPress={(e) => this.verify(e)} title="verify"/>
                <Button onPress={(e) => this.userGoBack(e)} title="back to previous page"/>
            </ScrollView>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        flag: state.register.navi_register,
        email: state.register.email,
        sysAlert: state.register.sysAlert,
        errorFlag: state.register.errorFlag
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        Verify: (code, email) => { dispatch(verify(code ,email)); },
        onLogout: () => { dispatch(logout()); },
        GoBack: () => { dispatch(goBack()); },
        cleanErrorStatus: () => {dispatch(cleanError()); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Secured);