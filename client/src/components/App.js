import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// react bootstrap navbar collapse hamburger button
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../App.css";

// components
import Navbar from "./navbar.component";
import JobList from "./Job/jobs-list.component";
import CreateJob from "./Job/create-job.component";
import EditJob from "./Job/edit-job.component";
import CompaniesList from "./company/companies-list.component";
import CreateCompany from "./company/create-company.component";
import EditCompany from "./company/edit-company.component";
import SearchJob from "./search/search-job";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={JobList} />
        <Route path="/company-list" component={CompaniesList} />
        <Route path="/edit-job/:id" component={EditJob} />
        <Route path="/edit-company/:id" component={EditCompany} />
        <Route path="/create-job" component={CreateJob} />
        <Route path="/create-company" component={CreateCompany} />
        <Route path="/search-job" component={SearchJob} />
      </div>
    </Router>
  );
}
export default App;
