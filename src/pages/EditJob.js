import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditJob() {
const { id } = useParams(); // Grab the ID from URL
const navigate = useNavigate();

const [title, setTitle] = useState("");
const [company, setCompany] = useState("");
const [status, setStatus] = useState("Applied");

// Load job details on mount
useEffect(() => {
axios.get(`http://localhost:3001/jobs/${id}`)
.then((res) => {
    console.log("Feteched job:",res.data);
setTitle(res.data.title);
setCompany(res.data.company);
setStatus(res.data.status);
})
.catch((err) => console.error("Error fetching job:", err));
}, [id]);

const handleSubmit = async (e) => {
e.preventDefault();

const updatedJob = {
title,
company,
status,
};

try {
await axios.put(`http://localhost:3001/jobs/${id}`, updatedJob);
alert("Job updated successfully!");
navigate("/");
} catch (error) {
console.error("Error updating job:", error);
}
};

return (
<div style={{ padding: "1rem" }}>
<h2>Edit job Details</h2>


<form onSubmit={handleSubmit}>
<div>
<label>Job Title: </label><br />
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
required
/>
</div>
<div>
<label>Company: </label><br />
<input
type="text"
value={company}
onChange={(e) => setCompany(e.target.value)}
required
/>
</div>
<div>
<label>Status: </label><br />
<select value={status} onChange={(e) => setStatus(e.target.value)}>
<option value="Applied">Applied</option>
<option value="Interview">Interview</option>
<option value="Offer">Offer</option>
<option value="Rejected">Rejected</option>
</select>
</div>
<button type="submit" style={{ marginTop: "1rem" }}>
Update Job
</button>
</form>
</div>
);
}

export default EditJob;
