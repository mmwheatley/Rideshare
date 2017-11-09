import { combineReducers } from "redux";

export const rootReducer = () => {
	return combineReducers({
		home: require("./locationReducer").reducer,
	});
}

export default rootReducer;