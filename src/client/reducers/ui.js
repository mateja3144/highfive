function getInitialState () {
    return {
        loading: false
    };
}

export default function (state = getInitialState(), action) {
    switch (action.type) {
        default:
            return state;
    }
}
