import {ACTION, STATUS} from '../constants/index'

const defaultState = {
    status: {},
    modal: {}
}

const StatusReducer = (state=defaultState.status, action) => {
    if (action.status) {
        let newstate={};
        newstate[action.type]=action.status;
        return {...state, ...newstate};
    } else if (action.type === ACTION.SHOW_MODAL) {
        if (!action.show) {
            let newstate={};
            newstate[action.modal]=STATUS.UNKNOWN;
            return {...state, ...newstate};
        }
    }
    return state
}

const ModalReducer = (state=defaultState.modal, action) => {
    if (action.modal) {
        let newstate = {};
        newstate[action.modal] = {...action};
        return {...state, ...newstate};
    }
    return state
}

const AppReducer = (state=defaultState, action) => {
    return {
        status: StatusReducer(state.status, action),
        modal: ModalReducer(state.modal, action)
    }
}

export default AppReducer