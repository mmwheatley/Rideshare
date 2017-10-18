import React from "react";
import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";

// screens identified by the router
import Login from "../Containers/LoginScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import NavigationDrawer from "./NavigationDrawer";


// login stack
const LoginStack = StackNavigator({
	LaunchScreen: { screen: LaunchScreen },
	LoginScreen: { screen: Login },
	//signupScreen: { screen: SignupScreen },
	//forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
  }, 
  {
	headerMode: 'none',	
	}
);
export default LoginStack;