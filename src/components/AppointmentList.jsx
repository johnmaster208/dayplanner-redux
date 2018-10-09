import React from 'react'
import PropTypes from 'prop-types'
import { Appointment } from '.'

const AppointmentList = ({appointments, ...props}) => {

    return(
        <div className="appointment-list">
            {
                appointments.map( (appt, i) => <Appointment key={i} appt={appt} {...props} />)
            }
        </div>
    )
}

AppointmentList.propTypes = {
    appointments: PropTypes.array.isRequired
}

export default AppointmentList;