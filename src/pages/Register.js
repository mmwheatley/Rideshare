import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, TouchableOpacity, Image, Keyboard, LayoutAnimation, KeyboardAvoidingView } from 'react-native';
import { logout} from '../redux/actions/auth';
import { register, cleanError} from '../redux/actions/register';

import { Button, Text as NBText, Contant, Form, Item, Input, Label } from "native-base";
import { Images, Metrics } from "../Themes";
import Styles from "./Styles/LoginScreenStyles";

class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName:'',
            lastName:'',
            mobileNumber:'',
            visibleHeight: Metrics.screenHeight,
            fontSize: 30
        };
    }

    focusNextField(id) {
        this.inputs[id].focus();
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
        console.log(this.refs)
      }
    }

    componentWillMount() {
		// Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
		// TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
		this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", this.keyboardDidShow);
		this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", this.keyboardDidHide);
    }

    componentWillUnmount() {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
    }

    keyboardDidShow = e => {
		// Animation types easeInEaseOut/linear/spring
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		let newSize = Metrics.screenHeight - e.endCoordinates.height;
		this.setState({
			visibleHeight: newSize,
			fontSize: 20,
        });
    };
    
    keyboardDidHide = e => {
		// Animation types easeInEaseOut/linear/spring
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({
			visibleHeight: Metrics.screenHeight,
			fontSize: 30
		});
    };
    
    render() {
        return (
            <KeyboardAvoidingView
                contentContainerStyle={{ justifyContent: "center" }}
                style={[Styles.container, { height: this.state.visibleHeight }]}
                keyboardShouldPersistTaps="never"
            >
            <View style={Styles.section}>
                <Text style={[Styles.title, this.state.fontSize]}>
                    Sign Up  
                </Text>
            </View >
            <View style={Styles.form}>
                <Form>
                    <Item floatingLabel>
                        <Label>email</Label>
                        <Input
                            value={this.state.email}
                            blurOnSubmit={ false }
                            keyboardType="email-address"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({ email: text })}
                            underlineColorAndroid="transparent"
                            onSubmitEditing={() => {
                                this.lastName._root.focus();
                              }}
                            ref={ input => {
                            this.inputs['one'] = input;
                            }}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            value={this.state.password}
                            blurOnSubmit={ false }
                            keyboardType="default"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            onChangeText={(text) => this.setState({ password: text })}
                            underlineColorAndroid="transparent"
                            onSubmitEditing={() => {
                                this.focusNextField('three');
                              }}
                            ref={ input => this.lastName = input}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>First Name</Label>
                        <Input
                            value={this.state.firstName}
                            blurOnSubmit={ false }
                            keyboardType="default"
                            returnKeyType="next"
                            autoCapitalize="words"
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({ firstName: text })}
                            underlineColorAndroid="transparent"
                            onSubmitEditing={() => {
                                this.focusNextField('four');
                              }}
                            ref={ input => {
                            this.inputs['three'] = input;
                            }}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Last Name</Label>
                        <Input
                            value={this.state.lastName}
                            blurOnSubmit={ false }
                            keyboardType="default"
                            returnKeyType="next"
                            autoCapitalize="words"
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({ lastName: text })}
                            underlineColorAndroid="transparent"
                            onSubmitEditing={() => {
                                this.focusNextField('five');
                              }}
                            ref={ input => {
                            this.inputs['four'] = input;
                            }}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Mobile Number</Label>
                        <Input
                            value={this.state.mobileNumber} 
                            blurOnSubmit={ true }
                            keyboardType="numeric"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({ mobileNumber: text })}
                            underlineColorAndroid="transparent"
                            onSubmitEditing={(e) => this.userRegister(e)}
                            ref={ input => {
                                this.inputs['five'] = input;
                            }}
                        />
                    </Item>
                </Form>
                <View style={[Styles.loginRow]}>
                    <Button 
                        style={{ flex: 1, justifyContent: "center" }} 
                        full 
                        onPress={(e) => this.userRegister(e)}>
                        <NBText style={Styles.loginText}>Register</NBText>
                    </Button>
                    <Button 
                        style={{ flex: 1, justifyContent: "center" }} 
                        full
                        onPress={(e) => this.userLogout(e)}>
                        
                        <NBText style={Styles.loginText}>Cancel</NBText>
                    </Button>
                </View>
            </View>
        </KeyboardAvoidingView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);