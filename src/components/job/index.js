import React, { Component } from 'react';
import './style.css';

class Job extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      company,
      cityState,
      position,
      dateFrom,
      dateTo,
      desc1,
      desc2,
      desc3,
      desc4,
    } = this.props;

    return (
      <div className="job">
        <div className="company-info">
          <h3>{company}</h3>
          <h4>{cityState}</h4>
        </div>
        <div classname="position-and-dates">
          <p>{position}</p>
          <p>{dateFrom} to {dateTo}</p>
        </div>
        <div className="descriptions">
          <ul>
            <li><p>{desc1 || null}</p></li>
            <li><p>{desc2 || null}</p></li>
            <li><p>{desc3 || null}</p></li>
            <li><p>{desc4 || null}</p></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Job;