import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Icon, Button, Text as NBText } from "native-base";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class LaunchScreen extends React.Component {
	render() {
		return (
			<View style={styles.mainContainer}>
				<Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" />
				<ScrollView style={styles.container}>
					<View style={styles.centered}>
						<Image source={Images.fastcar} style={styles.logo} />
					</View>

					<View style={styles.section}>
						<Text style={styles.title}>
							RideShare
							
						</Text>
					</View >
					<View style={styles.loginRow}>
						<Button
							style={styles.loginButton} 
							onPress={() => this.props.navigation.navigate("LoginScreen")}
							>
							<Icon name="ios-lock" />
							<NBText style={styles.loginText}>Login</NBText>
						</Button>
						<Button
							style={styles.signUpButton} 
							//onPress={() => this.props.navigation.navigate("RegisterScreen")}
							>
							<Icon name="ios-key" />
							<NBText style={styles.loginText} >Register</NBText>
						</Button>
					</View>
				</ScrollView>
			</View>
		);
	}
}
