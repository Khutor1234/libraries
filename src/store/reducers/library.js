const updateLibrary = (state , action) => {
    const {type, payload} = action;

    if (state === undefined) {
        return {
            user: null
        };
    }

    switch(type){
        default:
            return state.library
    } 
}

export default updateLibrary;