import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Button, Text as NBText } from "native-base";
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
					</View>
					<Button
						style={{ alignSelf: "center" }}
						onPress={() => this.props.navigation.navigate("LoginScreen")}
					>
						<NBText>Let's Go!</NBText>
					</Button>
				</ScrollView>
			</View>
		);
	}
}
