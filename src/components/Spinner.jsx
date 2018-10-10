import React, {Component} from 'react'
import PropTypes from 'prop-types'
import LoadingImage from '../images/ajax-loader.gif'
import {STATUS} from '../constants'

class Spinner extends Component {

    constructor(props) {
        super(props)
    }
    insertRandomPoppycock() {
        let saying = ''
        const verbs = ['Consorting','Organizing','Conniving','Conspiring', 'Grokking', 'Thinking', 'Organizing', 'Calculating', 'Begging', 'Wishing', 'Pondering']
        const prepositions = ['towards', 'to', 'beside', 'around', 'over', 'with', 'across', 'for', 'between', 'below']
        const nouns = ['Badgers', 'Cats', 'Unicorns', 'Rainbows', 'Angels', 'Demons', 'Turtles', 'Babies', 'Puppies', 'Dolphins']
        for(let i = 0; i <=7; i++) {
            let randomizer = () => Math.floor(Math.random() * 10)
            saying = `${verbs[randomizer()]} ${prepositions[randomizer()]} ${nouns[randomizer()]}...`
        }
        return saying  
    }

    render() {
        const {reservestatus, modifystatus, cancelstatus} = this.props
        return (
            <div className="spinner">
                <h1>{this.insertRandomPoppycock()}</h1>
                { (reservestatus === STATUS.PENDING && modifystatus !== STATUS.PENDING && cancelstatus !== STATUS.PENDING) && <div>(...and reserving your appointment...)</div> }
                { (modifystatus === STATUS.PENDING && cancelstatus !== STATUS.PENDING && reservestatus !== STATUS.PENDING) && <div>(...and modifying your appointment...)</div> }
                { (cancelstatus === STATUS.PENDING && modifystatus !== STATUS.PENDING && reservestatus !== STATUS.PENDING) && <div>(...and cancelling your appointment...)</div> }
                <div><img className="spinner-thumbs" src={LoadingImage} /></div>
                
            </div>
        )
    }

}

Spinner.propTypes = {
    reservestatus: PropTypes.string.isRequired,
    modifystatus: PropTypes.string.isRequired,
    cancelstatus: PropTypes.string.isRequired
}

export default Spinner