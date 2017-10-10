import React, { Component } from 'react';
import Job from '../job/index';
import './style.css';

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <h1>Jessica Smith</h1>
          <Job
            company="Paint Nite"
            cityState="Somerville, MA"
            position="Software Developer"
            dateFrom="06/2016"
            dateTo="present"
            desc1="I write code that makes the whole world sing."
          />
          <Job
            company="Paint Nite"
            cityState="Somerville, MA"
            position="QA Automation Engineer"
            dateFrom="11/2014"
            dateTo="05/2016"
            desc1="I tested stuff."
          />
          <Job
            company="Aereo"
            cityState="Boston, MA"
            position="QA Engineer"
            dateFrom="04/2013"
            dateTo="10/2014"
            desc1="I watched a lot of TV."
          />
          <Job
            company="WB Games / Turbine"
            cityState="Needham, MA"
            position="SQA Engineer"
            dateFrom="10/2011"
            dateTo="10/2012"
            desc1="I did devops stuff and made a web page!"
          />
          <Job
            company="Harmonix Music Systems"
            cityState="Cambridge, MA"
            position="Web QA/Release Engineer"
            dateFrom="11/2007"
            dateTo="04/2011"
            desc1="I did things and other things."
          />
      </div>
    )
  }
}

export default Resume;