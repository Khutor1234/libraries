const updateUser = (state , action) => {
    const {type, payload} = action;

    if (state === undefined) {
        return {
            user: null
        };
    }

    switch(type){
        default:
            return state.user
    } 
}

export default updateUser;