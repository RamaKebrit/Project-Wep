import React, { useState } from 'react';
import './styles.css';

const students = [
  { name: "Aiden Carter", level: 1, averageScore: 88 },
  { name: "Bella Thompson", level: 2, averageScore: 91 },
  { name: "Caleb Johnson", level: 3, averageScore: 84 },
  { name: "Daisy Nguyen", level: 3, averageScore: 93 },
  { name: "Ethan Wright", level: 1, averageScore: 76 },
  { name: "Fiona Lopez", level: 3, averageScore: 89 },
  { name: "Gavin Smith", level: 2, averageScore: 82 },
  { name: "Hannah Patel", level: 3, averageScore: 95 },
  { name: "Isaac Chen", level: 1, averageScore: 79 },
  { name: "Jasmine Rivera", level: 2, averageScore: 87 }
];

const StudentTable = () => {
  const [selectedLevel, setSelectedLevel] = useState('All Levels');

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const filteredStudents = selectedLevel === 'All Levels' ?
    students :
    students.filter(student => student.level === parseInt(selectedLevel));

  return (
    <div>
      <h1 className="color">Table for University Student</h1>
      <label htmlFor="levelFilter">Filter by level: </label>
      <select id="levelFilter" value={selectedLevel} onChange={handleLevelChange}>
        <option value="All Levels">All Levels</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name of University Student</th>
            <th>Year</th>
            <th>Average Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.level}</td>
              <td>{student.averageScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
