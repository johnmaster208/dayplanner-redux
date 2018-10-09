import React from 'react'
import PropTypes from 'prop-types'

const Appointment = ({appt, showReserveAppt, showModifyAppt}) => {
    const { time, reserved, name, phone } = appt
    return(
        <div 
        className={"appointment " + (reserved ? "reserved " : "available ")} 
        onClick={reserved ? onShowModifyAppt : onShowReserveAppt}>
            <h1>{time}</h1>
            {
                reserved ?
                (
                    <div>
                        <h2>Reserved By: {name}</h2> 
                        <h2>Phone Number: {phone}</h2>
                    </div>
                )
                :
                (
                    <h2>This time slot is available.</h2>
                )
                
            }
        </div>
    )
    function onShowReserveAppt() {
        showReserveAppt(true, appt)
    }
    function onShowModifyAppt() {
        showModifyAppt(true, appt)
    }
}

Appointment.propTypes = {
    appt: PropTypes.object.isRequired,
    showReserveAppt: PropTypes.func.isRequired,
    showModifyAppt: PropTypes.func.isRequired
}

export default Appointment;