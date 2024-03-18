import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const initialDataLength = 4;
  const [dataLength, setDataLength] = useState(initialDataLength);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const toggleShowJobs = () => {
    setShowAllJobs(!showAllJobs);
    setDataLength(showAllJobs ? initialDataLength : jobs.length);
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. It is your future.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.slice(0, dataLength).map((job, index) => (
          <Job job={job} key={index} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <button onClick={toggleShowJobs} className="btn btn-primary">
          {showAllJobs ? "Show Less Jobs" : "Show All Jobs"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
