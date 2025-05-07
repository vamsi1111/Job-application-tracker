import { useState } from "react";
import axios from "axios";

function AddJob() {
const [title, setTitle] = useState("");
const [company, setCompany] = useState("");
const [status, setStatus] = useState("Applied");

const handleSubmit = async (e) => {
e.preventDefault();

const newJob = {
title,
company,
status,
};

try {
await axios.post("http://localhost:3001/jobs", newJob);
alert("Job added successfully!");
setTitle("");
setCompany("");
setStatus("Applied");
} catch (error) {
console.error("Error adding job:", error);
}
};

return (
<div className="container mt-4">
<h2>Add a New Job</h2>
<form onSubmit={handleSubmit} className="mt-3">
<div className="mb-3">
<label className="form-label">Job Title:</label>
<input
type="text"
className="form-control"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
</div>
<div className="mb-3">
<label className="form-label">Company:</label>
<input
type="text"
className="form-control"
value={company}
onChange={(e) => setCompany(e.target.value)}
/>
</div>
<div className="mb-3">
<label className="form-label">Status:</label>
<select
className="form-select"
value={status}
onChange={(e) => setStatus(e.target.value)}
>
<option value="Applied">Applied</option>
<option value="Interview">Interview</option>
<option value="Rejected">Rejected</option>
</select>
</div>
<button type="submit" className="btn btn-primary">Add Job</button>
</form>
</div>
);
}

export default AddJob;