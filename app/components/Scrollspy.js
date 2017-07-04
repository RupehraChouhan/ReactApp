import React from 'react'
//import Scrollspy from './lib/Scrollspy.jsx'

class ScrollSpy extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const style = {
  minHeight: '500px',
}

    return (
      <div className="container">
        <section style={ style } id="section-1">
          <p>CS student at University of Alberta and former intern at Intuit
Like my website? Go check it out on GitHub.</p>
        </section>
        <section style={ style } id="section-2">
          <p>CS student at University of Alberta and former intern at Intuit
Like my website? Go check it out on GitHub.</p>
        </section>
        <section style={ style } id="section-3">
          <p>CS student at University of Alberta and former intern at Intuit
Like my website? Go check it out on GitHub.</p>
        </section>
      </div>
    );
  }
}

export default ScrollSpy;
