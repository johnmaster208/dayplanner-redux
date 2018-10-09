import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : 'Required'
const firstname = value => value && !/^[a-z ,.'-]+$/i.test(value) ? 'Letters only allowed in your First Name (Unless you are HAL 9000)' : undefined
const phonenumber = value => value && !/^\d{3}-\d{3}-\d{4}$/.test(value) ? 'Phone Number looks like (xxx-xxx-xxxx) with 10 digits and hyphens' : undefined

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input className="form-control input-lg" {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className="form-error-text">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

const ReserveAppointmentModal = ({show, active, showModal, reserve, handleSubmit, invalid, reset, form}) => {
    if (!show) return null
    if (show)  return (
        <Modal show={show} onHide={onHideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Reserve the {active.time} time slot!</Modal.Title>
            </Modal.Header>
            <form id={form} onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field component={renderField} name="firstName" type="text" validate={[required, firstname]} />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field component={renderField} name="phoneNumber" type="text" validate={[required, phonenumber]}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-primary" disabled={invalid} type="submit">Reserve</Button>
                <Button className="btn btn-secondary" type="submit" onClick={onHideModal}>Cancel</Button>
            </Modal.Footer>
            </form>
        </Modal>
    )
    function onHideModal() {
        showModal(false, active)
    }
    function onSubmit(data) {
        showModal(false, active)
        reserve({...active, reserved: true, name: data.firstName, phone: data.phoneNumber})
        reset()
    }
};

ReserveAppointmentModal.propTypes = {
    show: PropTypes.bool.isRequired,
    showModal: PropTypes.func.isRequired,
    reserve: PropTypes.func.isRequired,
    form: PropTypes.string,
    active: PropTypes.object,
    enableReinitialize: PropTypes.bool,
    initialValues: PropTypes.object.isRequired
}

export default reduxForm({form: 'reserve'})(ReserveAppointmentModal)