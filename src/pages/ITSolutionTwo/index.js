import React, { Component } from 'react';

import Section from './Section';
import Features from './Features';
import Aboutus from './Aboutus';
import Business from './Business';
import Cta from './Cta';
export default class ITSolutionTwo extends Component {
  render() {
    return (
      <React.Fragment>
        {/* import section */}
        <Section />
        {/* import Features */}
        <Features />
        <section className="section">
          <Aboutus />
          <Business />
        </section>
      </React.Fragment>
    );
  }
}
