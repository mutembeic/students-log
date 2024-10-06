// components/EditStudent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
  const { id } = useParams(); // Get the student ID from the URL
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: '',
    id: '',
    course: '',
    phoneNumber: '',
    yearAdmitted: ''
  });

  useEffect(() => {
    // Fetch the student data from the JSON Server
    axios.get(`http://localhost:5000/students/${id}`)
      .then(response => setStudent(response.data))
      .catch(error => console.error('Error fetching student:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update student details in the JSON Server
    axios.put(`http://localhost:5000/students/${id}`, student)
      .then(() => {
        alert('Student updated successfully!');
        navigate('/'); // Redirect to the home page
      })
      .catch(error => console.error('Error updating student:', error));
  };

  return (
    <div className="edit-student-form">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        {/* Render form fields similar to NewStudent component */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={student.id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={student.course}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={student.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="yearAdmitted">Year Admitted:</label>
          <input
            type="number"
            id="yearAdmitted"
            name="yearAdmitted"
            value={student.yearAdmitted}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
