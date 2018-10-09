import React from 'react'
import PropTypes from 'prop-types'
import { AppointmentList } from '.'

const MainComponent = (props) => {
  const {appointments} = props
  return (
    <AppointmentList appointments={appointments} {...props}/>
  )
}

MainComponent.propTypes = {
  appointments: PropTypes.array.isRequired,
  showReserveAppt: PropTypes.func.isRequired,
  showModifyAppt: PropTypes.func.isRequired
}

export default MainComponent