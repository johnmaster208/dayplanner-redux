import keyMirror from 'keymirror'

/* 
CONSTANTS, AND OTHER APPLICATION-WIDE VARIABLES
https://modernweb.com/javascript-configuration-object-pattern/ 
*/

export const ACTION = keyMirror({
    SHOW_MODAL: null,
    RESERVE_APPOINTMENT: null,
    CANCEL_APPOINTMENT: null,
    MODIFY_APPOINTMENT: null
})

export const STATUS = keyMirror({
    PENDING: null,
    COMPLETED: null,
    SUCCESS: null,
    FAILURE: null,
    UNKNOWN: null,
    ABORT: null,
    ERROR: null
})

export const MODAL = keyMirror({
    RESERVE_APPOINTMENT: null,
    MODIFY_APPOINTMENT: null
})

export const FORM = keyMirror({
    RESERVE: null,
    MODIFY: null
})

export const PATH = {
    home: "/home"
}