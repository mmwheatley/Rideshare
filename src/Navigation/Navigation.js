import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import HomeContainer from "../pages/Home/";

const scenes = Actions.create(
	<Scene key="root" hideNavBar>
		<Scene key="home" component={HomeContainer} title="home" initial />
	</Scene>

);

export default scenes;