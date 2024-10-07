import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(() => {
        setStudents(students.filter(student => student.id !== id));
      })
      .catch(error => console.error('Error deleting student:', error));
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
                <Link to={`/view-student/${student.id}`} className='view-button'>View</Link>
                <Link to={`/edit-student/${student.id}`} className='button edit-button'>Edit</Link>
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
