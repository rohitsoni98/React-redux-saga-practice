import ChangeTheName from "./update";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
	{
		change: ChangeTheName
	}
)

export default rootReducer;