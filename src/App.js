import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router } from "react-native-router-flux";

import createStore from "./store/createStore";
import scenes from "./Navigation/Navigation";

export default class App extends Component{
	renderApp(){
		const initialState = window.___INTITIAL_STATE__;
		const store = createStore(initialState);

		return (
			<Provider store={store}>
				<Router scenes={scenes} />
			</Provider>
			);
	}

	render(){
		return this.renderApp();
	}
}