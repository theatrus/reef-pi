import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Summary from './summary'
import 'isomorphic-fetch'

Enzyme.configure({ adapter: new Adapter() })

describe('Summary', () => {
  it('<Summary />', () => {
    const m = shallow(
      <Summary
        info={{}}
        fetch={() => true}
        errors={[]}
        timer={window.setInterval(() => true, 1800 * 1000)}
      />
    ).instance()
    m.componentWillUnmount()
  })
})
