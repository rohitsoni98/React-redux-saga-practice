import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateName, UpdateAge } from "./actions";

const App = () => {
	const { name, age } = useSelector(state => state.change);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Fetching Name by using Redux-Saga</h2>
			<h2>Age is also Updating by clicking Update age btn but there's a delay of 2 sec in it coz of Redux-Saga</h2>
			<p>My name is : {name}</p>
			<p>and my age is : {age}</p>
			<button onClick={() => dispatch(UpdateName())}>Update Name</button>
			<button onClick={() => dispatch(UpdateAge())}>Update Age</button>
		</div>
	)
}

export default App;