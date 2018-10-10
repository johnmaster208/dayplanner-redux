import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';

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

const ModifyAppointmentModal = ({show, active, showModal, modify, cancel, handleSubmit, form, reset, invalid}) => {
    if (!show) return null
    if (show)  return (
        <Modal show={show} onHide={onHideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Change the {active.time} time slot!</Modal.Title>
            </Modal.Header>
            <form id={form} onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field component={renderField} name="firstName" type="text" validate={[required, firstname]}/>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field component={renderField} name="phoneNumber" type="text" validate={[required, phonenumber]} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-primary" type="submit" disabled={invalid}>Update</Button>
                <Button type="submit" onClick={onCancel}>Remove</Button>
            </Modal.Footer>
            </form>
        </Modal>
    )
    function onHideModal() {
        showModal(false, active)
        reset()
    }
    function onCancel(e) {
        e.preventDefault()
        showModal(false, active)
        cancel(active)
        reset()
    }
    function onSubmit(data) {
        showModal(false, active)
        modify({...active, reserved: true, name: data.firstName, phone: data.phoneNumber})
    }
};


ModifyAppointmentModal.propTypes = {
    show: PropTypes.bool.isRequired,
    showModal: PropTypes.func.isRequired,
    modify: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    form: PropTypes.string,
    active: PropTypes.object,
    initialValues: PropTypes.object.isRequired
}

export default reduxForm({form: 'modify'})(ModifyAppointmentModal)