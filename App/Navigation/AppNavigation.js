import React from "react";
import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";

// screens identified by the router
import NavigationDrawer from "./NavigationDrawer";
import LoginStack from './LoginStack';

const PrimaryNav = StackNavigator(
	{	
		LoginStack: { screen: LoginStack },
		NavigationDrawer: { screen: NavigationDrawer },
	},
	{
		initialRouteName: "LoginStack",
		headerMode: "none",
	}
);


export default PrimaryNav;
