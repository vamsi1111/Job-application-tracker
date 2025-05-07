import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function JobList() {
const [jobs, setJobs] = useState([]);

useEffect(() => {
axios.get("http://localhost:3001/jobs")
.then((res) => setJobs(res.data))
.catch((err) => console.error("Error fetching jobs:", err));
}, []);

const handleDelete = async (id) => {
if (window.confirm("Are you sure you want to delete this job?")) {
await axios.delete(`http://localhost:3001/jobs/${id}`);
setJobs(jobs.filter((job) => job.id !== id));
}
};

return (
    <div className="container py-4">
    <h2 className="mb-4">All Job Applications</h2>
    {jobs.length === 0 ? (
    <p className="text-muted">No jobs found.</p>
    ) : (
    <div className="list-group">
    {jobs.map((job) => (
    <div key={job.id} className="list-group-item d-flex justify-content-between align-items-center mb-2">
    <div>
    <strong>{job.title}</strong> at {job.company} - <span className="badge bg-primary">{job.status}</span>
    </div>
    <div>
    <Link to={`/edit/${job.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
    <button onClick={() => handleDelete(job.id)} className="btn btn-danger btn-sm">Delete</button>
    </div>
    </div>
    ))}
    </div>
    )}
    </div>
    );
}

export default JobList;