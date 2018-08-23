import React, { Component } from 'react'
import store from '../store/configureStore'
import {ACTIONS} from '../constants/index'

class MainComponent extends Component {

  componentDidMount() {
    // store.dispatch({type: ACTIONS.DUMMY, data: { text: 'a dummy action'}})
    store.dispatch({type: ACTIONS.DUMMY, error: "Error was thrown!"})
  }

  render() {
    return (
      <div>
        Hello, World!
      </div>
    )
  }
}

export default MainComponent
