import updateUser from './user';

const reducer = (state, action) => {
	return {
		user: updateUser(state, action)
	};
};

export default reducer;