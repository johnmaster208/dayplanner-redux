import {ACTION, STATUS, MODAL} from '../constants'

const AppointmentActions = {
    showReserveAppointment: (show, appt) => {
        return dispatch => {
            dispatch({
                type: ACTION.SHOW_MODAL,
                modal: MODAL.RESERVE_APPOINTMENT,
                active: appt,
                show: show
            })
        }
    },
    reserve: (data, dispatch) => {
        return dispatch => {
            handleReserveAppointment(data, dispatch)
        }
    },
    showModifyAppointment: (show, appt) => {
        return dispatch => {
            dispatch({
                type: ACTION.SHOW_MODAL,
                modal: MODAL.MODIFY_APPOINTMENT,
                active: appt,
                show: show
            })
        }
    },
    modify: (data, dispatch) => {
        return dispatch => {
            handleModifyAppointment(data, dispatch)
        }
    },
    cancel: (data, dispatch) => {
        return dispatch => {
            handleCancelAppointment(data, dispatch) 
        }
    }
}

const handleReserveAppointment = (data, dispatch) => {
    console.log(data.time + ' is being RESERVED...');
    dispatch({type: ACTION.RESERVE_APPOINTMENT, status: STATUS.PENDING})
    let randomTimeout = parseInt(Math.random() * 10000);
    return new Promise( (resolve) => {
        setTimeout(() => {
            dispatch({type: ACTION.RESERVE_APPOINTMENT, status: STATUS.SUCCESS, data: data })
            resolve()
        }, randomTimeout);
    });
}

const handleModifyAppointment = (data, dispatch) => {
    console.log(data + ' is being MODIFIED...');
    dispatch({type: ACTION.MODIFY_APPOINTMENT, status: STATUS.PENDING})
    let randomTimeout = parseInt(Math.random() * 10000);
    return new Promise( (resolve) => {
        setTimeout(() => {
            dispatch({type: ACTION.MODIFY_APPOINTMENT, status: STATUS.SUCCESS, data: data })
            resolve()
        }, randomTimeout);
    });
}

const handleCancelAppointment = (data, dispatch) => {
    console.log(data + ' is being CANCELLED...');
    dispatch({type: ACTION.CANCEL_APPOINTMENT, status: STATUS.PENDING})
    let randomTimeout = parseInt(Math.random() * 10000);
    return new Promise( (resolve) => {
        setTimeout(() => {
            dispatch({type: ACTION.CANCEL_APPOINTMENT, status: STATUS.SUCCESS, data: data })
            resolve()
        }, randomTimeout);
    });
}


export default AppointmentActions