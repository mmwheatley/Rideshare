import React from "react";
import { DrawerNavigator } from "react-navigation";
import RidesScreen from '../Containers/RidesScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import HomeScreen from '../Containers/HomeScreen'
import ListviewExample from "../Containers/ListviewExample";
import CardExample from "../Containers/CardExample";
import DrawerContent from "../Containers/DrawerContent";

import styles from "./Styles/NavigationStyles";

const NavigationDrawer = DrawerNavigator({
  		
		Home: { screen: HomeScreen },
		Profile: { screen: ProfileScreen },
		"My Rides": {screen: RidesScreen},
		//ListviewExample: { screen: ListviewExample },
		//CardExample: { screen: CardExample },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <DrawerContent {...props} />,
	}
);

export default NavigationDrawer;
