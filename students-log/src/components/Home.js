import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [students, setStudents] = useState([]);

  // Fetch students from the JSON Server
  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  // Delete student
  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(() => {
        setStudents(students.filter(student => student.id !== id));
      })
      .catch(error => console.error('Error deleting student:', error));
  };

  // Placeholder functions for viewing and editing student
  const viewStudent = (id) => {
    // Logic to view student details
    alert(`View student with ID: ${id}`);
  };

  const editStudent = (id) => {
    // Logic to edit student details
    alert(`Edit student with ID: ${id}`);
  };

  return (
    <div className="home">
      <h2>Students List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Course</th>
            <th>Phone Number</th>
            <th>Year Admitted</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.id}</td>
              <td>{student.course}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.yearAdmitted}</td>
              <td>
                <button className="button" onClick={() => viewStudent(student.id)}>View</button>
                <button className="button edit-button" onClick={() => editStudent(student.id)}>Edit</button>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

