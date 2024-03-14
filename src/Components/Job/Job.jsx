import PropTypes from "prop-types";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex flex-col gap-2 md:flex-none md:flex-row">
          <button className="rounded border border-[#7E90FE] px-5 py-2 font-extrabold">
            {remote_or_onsite}
          </button>
          <button className="rounded border border-[#7E90FE] px-5 py-2 font-extrabold">
            {job_type}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="flex items-center">
            <MdLocationPin size={22} />
            {location}
          </h2>
          <h2 className="flex items-center">
            <AiOutlineDollar size={22} /> {salary}
          </h2>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary w-full md:w-auto">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.node,
};

export default Job;
