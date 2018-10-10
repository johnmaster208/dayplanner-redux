import React from 'react'
import PropTypes from 'prop-types'

const Appointment = ({appt, showReserveAppt, showModifyAppt}) => {
    const { time, reserved, name, phone } = appt
    return(
        <div 
        className={"appointment " + (reserved ? "reserved " : "available ")} 
        onClick={reserved ? onShowModifyAppt : onShowReserveAppt}>
            <div className="appointment-time">{time}</div>
            {
                <div className="appointment-info">
                {
                    reserved ?
                (    
                    <React.Fragment>
                        <p>Reserved By: {name}</p> 
                        <p>Phone Number: {phone}</p>
                    </React.Fragment>   
                )
                :
                (
                    <h3>This time slot is available.</h3>
                )}
                </div>
                
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