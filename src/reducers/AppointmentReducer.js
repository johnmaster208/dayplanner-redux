import {ACTION, STATUS} from '../constants' 

const initialState = {
    slots: [
        {
            id: 0,
            time: "9AM",
            reserved: false,
            name: undefined,
            phone: undefined    
        },{
            id: 1,
            time: "10AM",
            reserved: false,
            name: undefined,
            phone: undefined 
        },{
            id: 2,
            time: "11AM",
            reserved: false,
            name: undefined,
            phone: undefined
        },{
            id: 3,
            time: "12PM",
            reserved: false,
            name: undefined,
            phone: undefined
        },{
            id: 4,
            time: "1PM",
            reserved: false,
            name: undefined,
            phone: undefined
        },{
            id: 5,
            time: "2PM",
            reserved: false,
            name: undefined,
            phone: undefined
        },{
            id: 6,
            time: "3PM",
            reserved: false,
            name: undefined,
            phone: undefined
        },{ 
            id: 7,
            time: "4PM",
            reserved: false,
            name: undefined,
            phone: undefined
        },{
            id: 8,
            time: "5PM",
            reserved: false,
            name: undefined,
            phone: undefined
        }
    ]
}

const AppointmentReducer = (state=initialState, action) => {
    switch(action.type) {
        case ACTION.RESERVE_APPOINTMENT:
        case ACTION.MODIFY_APPOINTMENT: {
            if(action.status === STATUS.SUCCESS) {
                let newState = JSON.parse(JSON.stringify(state));
                newState.slots[action.data.id] = {
                    id: action.data.id,
                    time: action.data.time,
                    reserved: action.data.reserved,
                    name: action.data.name,
                    phone: action.data.phone
                }
                return newState
            }
            return state
        }
        case ACTION.CANCEL_APPOINTMENT: {
            if(action.status === STATUS.SUCCESS) {
                let newState = JSON.parse(JSON.stringify(state));
                newState.slots[action.data.id] = {                 
                    id: action.data.id,
                    time: action.data.time,
                    reserved: false,
                    name: undefined,
                    phone: undefined
                }
                return newState
            }
        }
        default: {
            return state;
        }
    }
}

export default AppointmentReducer