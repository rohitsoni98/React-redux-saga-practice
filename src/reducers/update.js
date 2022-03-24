const initialState = {
	name: "Aman",
	age: 22
};

const ChangeTheName = (state = initialState, action) => {
	switch (action.type) {
		case "Update_Name":
			return {
				...state,
				name: action.payload
			};
		case "Update_age":
			return {
				...state,
				age: action.payload
			}
		default:
			return state

	}
}

export default ChangeTheName;