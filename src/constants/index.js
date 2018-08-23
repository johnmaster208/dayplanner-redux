import keyMirror from 'keymirror'

/* 
CONSTANTS, AND OTHER APPLICATION-WIDE VARIABLES
https://modernweb.com/javascript-configuration-object-pattern/ 
*/

export const ACTIONS = keyMirror({
    //DEFINE ACTIONS HERE...
    DUMMY: null
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

export const PATH = {
    home: "/home"
}