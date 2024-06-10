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
  return (
    <span>
      <ul> {list} </ul>
    </span>
  );
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
  { name: "Toni", grade: "5" },
  { name: "Didi", grade: "9" },
  { name: "Angelo", grade: "3" },
  { name: "Tati", grade: "6.5" },
  { name: "Marta", grade: "10" },
];

const gradeTable = (arr) => {
  const studentList = arr.map((student, index) => {
    return (
      <tr key={index}>
        <th>{student.name}</th>
        <th>{student.grade}/10</th>
      </tr>
      // Identificar cada fila de la tabla con el key=id
    );
  });
  return (
    // Devuelve la tabla ya creada
    <table>
      <caption>Students grade</caption>
      <tr>
        <th>Student</th>
        <th>Grade</th>
      </tr>
      {studentList}
    </table>
  );
};

// Cambio de estilo con las notas
const passingTable = (arr) => {
  const studentList = arr.map((data, index) => {
    const gradeStyle = {
      color: data.grade < 5 ? "red" : "black",
    };
    return (
      <tr key={index}>
        <th>{data.name}</th>
        <td style={gradeStyle}>{data.grade}</td>
      </tr>
    );
  });
  return (
    <table>
      <caption>Students</caption>
      <th>Name</th>
      <th>Grade</th>
      {studentList}
    </table>
  );
};

// Función final para inicializar todos los elementos
function App() {
  return (
    <>
      <div>
        {greetUser("Karencias")}
        <section>
          <div className="group">
            <span>{colleaguesCount(colleagues)}</span>
            <span>{colleaguesList(colleagues)}</span>
          </div>
          <span>{gradeTable(grades)}</span>
          <span>{passingTable(grades)}</span>
        </section>
      </div>
    </>
  );
}

export default App;
