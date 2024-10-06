import React, { useState } from 'react';
import axios from 'axios';

const NewStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    id: '',
    course: '',
    phoneNumber: '',
    yearAdmitted: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new student to the JSON Server
    axios.post('http://localhost:5000/students', student)
      .then(() => {
        alert('Student added successfully!');
        setStudent({
          name: '',
          id: '',
          course: '',
          phoneNumber: '',
          yearAdmitted: ''
        });
      })
      .catch(error => console.error('Error adding student:', error));
  };

  return (
    <div className="new-student-form">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default NewStudent;
