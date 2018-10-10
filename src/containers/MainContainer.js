import React, {Component} from 'react'
import {connect} from 'react-redux'
import { MainComponent, AppointmentList, ReserveAppointmentModal, ModifyAppointmentModal, Spinner } from '../components';
import {AppointmentActions} from '../actions/'
import {ACTION, STATUS, FORM} from '../constants'
import { appendFileSync } from 'fs';

class MainContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {
            appointments, 
            showReserveAppt, 
            showModifyAppt, 
            reservemodal,
            reservestatus,
            modifymodal,
            modifystatus,
            reserve,
            modify,
            cancel,
            cancelstatus,
            ...props
        } = this.props
        let list = appointments.reduce((all, current) => {
            all.push(current)
            return all
        },[])
            return (
                <div id="app">
                {
                    (reservestatus === STATUS.PENDING || modifystatus === STATUS.PENDING || cancelstatus === STATUS.PENDING ) 
                    && <Spinner reservestatus={reservestatus} modifystatus={modifystatus} cancelstatus={cancelstatus} />
                }
                    <div>
                        <MainComponent 
                            appointments={list} 
                            showReserveAppt={showReserveAppt}
                            showModifyAppt={showModifyAppt} 
                            {...props} 
                        />
                    </div>
                    <div>
                            <ReserveAppointmentModal 
                                show={reservemodal ? reservemodal.show : false} 
                                showModal={showReserveAppt} 
                                reserve={reserve}
                                form={FORM.RESERVE}
                                active={reservemodal ? reservemodal.active : null}
                                enableReinitialize={true}
                                initialValues={{}}
                                />
                    </div>
                    <div>
                        { modifymodal && 
                            (
                                <ModifyAppointmentModal 
                                    show={modifymodal ? modifymodal.show : false} 
                                    showModal={showModifyAppt} 
                                    modify={modify}
                                    cancel={cancel}
                                    form={FORM.MODIFY}
                                    active={appointments[modifymodal.active.id]}
                                    enableReinitialize={true}
                                    initialValues={{
                                        firstName: appointments[modifymodal.active.id].name,
                                        phoneNumber: appointments[modifymodal.active.id].phone
                                    }}
                                />
                            )
                        }
                    </div>
                </div>
            )
        
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        showReserveAppt: (bool, appt) => {
            dispatch(AppointmentActions.showReserveAppointment(bool, appt))
        },
        showModifyAppt: (bool, appt) => {
            dispatch(AppointmentActions.showModifyAppointment(bool, appt))
        },
        reserve: (appointment) => {
            dispatch(AppointmentActions.reserve(appointment))
        },
        cancel: (appointment) => {dispatch(AppointmentActions.cancel(appointment))
        },
        modify: (appointment) => {
            dispatch(AppointmentActions.modify(appointment))
        }
    }
}

const mapStateToProps = (state) => {
    const {app, appointments, form} = state
    return {
        appointments: appointments.slots,
        reservemodal: app.modal[ACTION.RESERVE_APPOINTMENT],
        reservestatus: app.status[ACTION.RESERVE_APPOINTMENT] ? app.status[ACTION.RESERVE_APPOINTMENT] : STATUS.UNKNOWN,
        modifymodal: app.modal[ACTION.MODIFY_APPOINTMENT],
        modifystatus: app.status[ACTION.MODIFY_APPOINTMENT] ? app.status[ACTION.MODIFY_APPOINTMENT] : STATUS.UNKNOWN,
        cancelstatus: app.status[ACTION.CANCEL_APPOINTMENT] ? app.status[ACTION.CANCEL_APPOINTMENT] : STATUS.UNKNOWN
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)