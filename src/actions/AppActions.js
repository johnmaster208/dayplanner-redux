import {ACTION} from '../constants'

const AppActions = {

    showModal: (modal, bool) => {
        return dispatch => {
            dispatch({
                type: ACTION.SHOW_MODAL,
                modal: modal,
                show: bool
            })
        }
    },

}

export default AppActions