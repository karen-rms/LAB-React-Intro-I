import React from "react";
import "./App.css";

// Greeting function
const greetUser = (user) => {
  return <h1> Welcome back, {user}, it's nice to see you </h1>;
};

// Función para una lista desordenada
const colleagues = ["Toni", "Didi", "Angelo", "Tati", "Marta"];
const colleaguesList = (elem) => {
  const list = elem.map((item, index) => {
    return <li key={index}> {item} </li>;
  });
  return <span> <ul> {list} </ul> </span>;
};

// Length of students list - revisar 
const colleaguesCount = (elem) => {
  let count = elem.length;
  return (
    <div>
      {count === 0 ? (
        <span>There's no students</span>
      ) : (
        <span>You have {count} students</span>
      )}
    </div>
  );
};

// Tabla de estudiantes con sus notas
const grades = [
  {name: 'Toni', grade: '5'},
  {name: 'Didi', grade: '5'},
  {name: 'Angelo', grade: '5'},
  {name: 'Tati', grade: '5'},
  {name: 'Mrta', grade: '5'},
]

const gradeTable = (arr) => {
  const studentList = arr.map((student, index) => {
    return (
      <tr key={index}>
        <th>{student.name}</th>
        <th>{student.grade}/10</th>
      </tr>
    );
  });
  return (
    <table>
      <tr>
        <th>Student</th>
        <th>Grade</th>
      </tr>
      {studentList}
    </table>
  );
};

// Cambio de estilo con las notas



// Función final para inicializar todos los elementos
function App() {
  return (
    <>
      <div>
        {greetUser("Karencias")}
        <section>
          <div className='group'>
            <span>{colleaguesCount(colleagues)}</span>
            <span>{colleaguesList(colleagues)}</span>
          </div>
          <span>{gradeTable(grades)}</span>
        </section>
      </div>
    </>
  );
}

export default App;
