import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Company = (props) => (
  <tr>
    <td>{props.company.name}</td>
    <td>{props.company.location}</td>
    <td>{props.company.contact1}</td>
    <td>{props.company.contact2}</td>
    <td>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group mr-3" id="tableButton" role="group">
          <Link to={"/edit-company/" + props.company._id}>Edit</Link>
        </div>
        <div className="btn-group" id="tableButton" role="group">
          <a
            herf="#"
            onClick={() => {
              if (window.confirm("Delete the Company?")) {
                props.deleteCompany(props.company._id);
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

export default class CompaniesList extends Component {
  constructor(props) {
    super(props);

    this.deleteCompany = this.deleteCompany.bind(this);
    this.state = { companies: [] };
  }

  componentDidMount() {
    //axios.get('http://localhost:5000/companies/')
    axios
      .get("https://the-job-hunter.herokuapp.com/companies/")
      .then((response) => {
        console.log(response.data);
        this.setState({ companies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteCompany(id) {
    //axios.delete('http://localhost:5000/companies/'+id)
    axios
      .delete("https://the-job-hunter.herokuapp.com/companies/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      companies: this.state.companies.filter((el) => el._id !== id),
    });
  }

  // return the rows of the table,
  companyList() {
    return this.state.companies.map((currentcompany) => {
      return (
        <Company
          company={currentcompany}
          deleteCompany={this.deleteCompany}
          key={currentcompany._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="rTable">
        <h3>Logged Companies</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Location</th>
              <th>Contact Number</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.companyList()}</tbody>
        </table>
      </div>
    );
  }
}
