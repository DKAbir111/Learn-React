import './App.css';
import Todo from './Todo';
import Condition from './Condition';

function App() {
  const Person = { name: "Abir", age: 21, gender: "Male" }
  return (
    <>
      <h1>This is my first React app with Vite</h1>
      <Student firstName="Salam" />
      <Todo />
      <Condition Person={Person} />
    </>
  );
}

function Student(props) {
  const { firstName } = props;
  const studentStyle = {
    color: "red",
    border: "2px solid black",
    borderRadius: "20px"
  }
  return (
    <>
      <h2 style={studentStyle} className='student'>This is a student component: {firstName}</h2>
    </>
  );
}


export default App;
