import updateLibrary from './library';

const reducer = (state, action) => {
	return {
		user: updateLibrary(state, action)
	};
};

export default reducer;