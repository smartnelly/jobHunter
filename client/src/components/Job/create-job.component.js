import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CreateJob extends Component {
  constructor(props) {
    super(props);

    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // set the initial state of the component
    this.state = {
      company: "",
      jobTitle: "",
      description: "",
      duration: "",
      status: "",
      date: new Date(),
      // for the drop down menu
      companies: [],
    };
  }

  componentDidMount() {
    //axios.get('http://localhost:5000/companies/')
    axios
      .get("https://the-job-hunter.herokuapp.com/companies/")
      .then((response) => {
        // check if there is at least one company in the DB
        if (response.data.length > 0) {
          this.setState({
            companies: response.data.map((company) => company.name),
            //first company in the DB
            company: response.data[0].name,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // methods which can be used to update the state properties
  onChangeCompany(e) {
    this.setState({
      company: e.target.value,
    });
  }

  onChangeJobTitle(e) {
    this.setState({
      jobTitle: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const job = {
      company: this.state.company,
      jobTitle: this.state.jobTitle,
      description: this.state.description,
      duration: this.state.duration,
      status: this.state.status,
      date: this.state.date,
    };

    //axios.post('http://localhost:5000/jobs/add', job)
    axios
      .post("https://the-job-hunter.herokuapp.com/jobs/add", job)
      // log the result to the console
      .then((res) => {
        console.log(res.data);
        this.props.history.push("/");
      });
  }

  render() {
    return (
      <div>
        <h3>Create New Job Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Company </label>
            <label style={{ color: "red" }}>＊ </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.company}
              onChange={this.onChangeCompany}
            >
              {this.state.companies.map(function (company) {
                return (
                  <option key={company} value={company}>
                    {company}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Job Title </label>
            <label style={{ color: "red" }}>＊ </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.jobTitle}
              onChange={this.onChangeJobTitle}
            />
          </div>
          <div className="form-group">
            <label>Job Description </label>
            <label style={{ color: "red" }}>＊ </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Travel Duration(in minutes)</label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <input
              type="text"
              className="form-control"
              value={this.state.status}
              onChange={this.onChangeStatus}
            />
          </div>

          {/* -------------------Date------------------------------ */}
          <div className="form-group">
            <label>Date</label>
            <label style={{ color: "red" }}>＊ </label>
            <input
              type="date"
              className="form-control"
              value={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>

          <div className="form-group">
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div className="input-group mr-2">
                <input
                  type="submit"
                  value="Create Job Log"
                  className="btn btn-primary"
                />
              </div>
              <div className="btn-group" role="group">
                <Link to="/">
                  <input
                    type="button"
                    value="Cancel"
                    className="btn btn-danger"
                  />
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
