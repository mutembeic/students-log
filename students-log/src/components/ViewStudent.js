import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ViewStudent = () => {
  const { id } = useParams(); // Get the student ID from the URL
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Fetch the student data from the JSON Server
    axios.get(`http://localhost:5000/students/${id}`)
      .then(response => setStudent(response.data))
      .catch(error => console.error('Error fetching student:', error));
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-student">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Phone Number:</strong> {student.phoneNumber}</p>
      <p><strong>Year Admitted:</strong> {student.yearAdmitted}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default ViewStudent;
