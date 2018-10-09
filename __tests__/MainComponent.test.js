import React from 'react'
import {shallow} from 'enzyme'
import {MainContainer} from '../src/containers/MainContainer'
import {MainComponent, Spinner} from '../src/components/MainComponent'

describe('Spinner', () => {
    it('renders...', () => {
        const wrapper = shallow(<Spinner />)
        expect(wrapper).toMatchSnapshot()
    })
})
// describe('MainComponent', () => {
//     it('renders...', () => {
//         const wrapper = shallow(<MainContainer />)
//         expect(wrapper).toMatchSnapshot()
//     })
// });

