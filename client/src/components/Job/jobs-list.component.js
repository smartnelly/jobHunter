// the homepage that shows every applied job

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Job = (props) => (
  <tr>
    <td style={{ color: "white" }}>{props.job.company}</td>
    <td>{props.job.jobTitle}</td>
    <td>{props.job.description}</td>
    <td>{props.job.duration}</td>
    <td>{props.job.status}</td>
    <td>{props.job.date.substring(0, 10)}</td>
    <td>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group mr-3" id="tableButton" role="group">
          <Link to={"/edit-job/" + props.job._id}>Edit</Link>
        </div>
        <div className="btn-group" id="tableButton" role="group">
          <a
            href="#"
            onClick={() => {
              if (window.confirm("Delete the Job?")) {
                props.deleteJob(props.job._id);
              }
            }}
            style={{ color: "red" }}
          >
            Delete
          </a>
        </div>
      </div>
    </td>
  </tr>
);

// a class component
export default class JobsList extends Component {
  constructor(props) {
    super(props);

    this.deleteJob = this.deleteJob.bind(this);
    // intialize the state to an empry job array
    this.state = { jobs: [] };
  }

  // get the job form the DB
  componentDidMount() {
    //axios.get('http://localhost:5000/jobs/')
    axios
      .get("https://the-job-hunter.herokuapp.com/jobs/")
      .then((response) => {
        // get all the fields of the job (id, discription, duration, ...)
        console.log(response.data);
        this.setState({ jobs: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteJob(id) {
    //axios.delete('http://localhost:5000/jobs/'+id)
    axios
      .delete("https://the-job-hunter.herokuapp.com/jobs/" + id)
      .then((response) => {
        console.log(response.data);
      });

    // after the delete operation, automatically update the page with that new state
    this.setState({
      jobs: this.state.jobs.filter((el) => el._id !== id),
    });
  }

  // return the rows of the table
  jobList() {
    return this.state.jobs.map((currentjob) => {
      return (
        <Job job={currentjob} deleteJob={this.deleteJob} key={currentjob._id} />
      );
    });
  }

  render() {
    return (
      <div className="rTable">
        <h3>Jobs Application</h3>
        <table className="table">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>Company</th>
              <th>Job Title</th>
              <th>Job Description</th>
              <th>Travel Duration</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.jobList()}</tbody>
        </table>
      </div>
    );
  }
}
