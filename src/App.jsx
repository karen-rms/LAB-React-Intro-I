import "./App.css";

// Greeting function
const greetUser = (user) => {
  return <h1> Welcome, {user}, it's nice to see you </h1>;
};

// Función para una lista desordenada
const colleages = ["Toni", "Didi", "Marta", "Tati", "Angelo"];
const colleagesList = (elem) => {
  const list = elem.map((item, index) => {
    return <li key={index}> {item} </li>;
  });
  return <ul> {list} </ul>;
};

// Length of students list
const colleagesCount = (elem) => {
  const counter 
  return <div> You have {counter} students </div>;
};

// Función para inicializar todos los elementos
function App() {
  return (
    <>
      <div>
        {greetUser("Karencias")}
        {colleagesList(colleages)}
        {colleagesCount(colleages)}
      </div>
    </>
  );
}

export default App;
