import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CreateCompany extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeContact1 = this.onChangeContact1.bind(this);
    this.onChangeContact2 = this.onChangeContact2.bind(this);

    this.state = {
      name: "",
      location: "",
      contact1: "",
      contact2: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onChangeContact1(e) {
    this.setState({
      contact1: e.target.value,
    });
  }

  onChangeContact2(e) {
    this.setState({
      contact2: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const company = {
      name: this.state.name,
      location: this.state.location,
      contact1: this.state.contact1,
      contact2: this.state.contact2,
    };

    console.log(company);

    //axios.post('http://localhost:5000/companies/add', company)
    axios
      .post("https://the-job-hunter.herokuapp.com/companies/add", company)
      .then((res) => {
        console.log(res.data);
        this.props.history.push("/company-list");
      });

    this.setState({
      name: "",
      location: "",
      contact1: "",
      contact2: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Create New Company</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Company </label>
              <label style={{ color: "red" }}>＊ </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Location</label>
              <label style={{ color: "red" }}>＊ </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              className="form-control"
              value={this.state.contact1}
              onChange={this.onChangeContact1}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              value={this.state.contact2}
              onChange={this.onChangeContact2}
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
                  value="Create Company"
                  className="btn btn-primary"
                />
              </div>
              <div className="btn-group" role="group">
                <Link to="/company-list">
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
