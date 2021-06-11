import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";

import SearchForm from "./SearchForm";

function SearchJob() {
  const [params, setParams] = useState({});
  const { jobs, loading, error } = useFetchJobs(params);
  

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <div className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </div>
  );
}

export default SearchJob;
