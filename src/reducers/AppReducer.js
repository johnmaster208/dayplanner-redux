const defaultState = {
    status: {},
    alert: {},
    error: {}
}

const StatusReducer = (state=defaultState.status, action) => {
    switch(action.status) {
        default: {
            return state
        }
    }
}

const AlertReducer = (state=defaultState.alert, action) => {
    switch(action.alert) {
        default: {
            return state
        }
    }
}

const ErrorReducer = (state=defaultState.error, action) => {
    switch(action.error) {
        default: {
            return {...state, ...action.error}
        }
    }
}

const AppReducer = (state=defaultState, action) => {
    if(action.type) {
        let newState = {
            ...state,
            status: StatusReducer,
            alert: AlertReducer,
            error: ErrorReducer
        }
        return newState
    }
    return state
}

export default AppReducer