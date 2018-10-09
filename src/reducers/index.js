import {combineReducers} from 'redux'
import AppReducer from './AppReducer'
import AppointmentReducer from './AppointmentReducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    app: AppReducer,
    appointments: AppointmentReducer,
    form: formReducer
})

export default rootReducer