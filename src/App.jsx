import './App.css';
import Todo from './Todo';
import Condition from './Condition';
import Count from './Count';
import Friends from './Friends';
// import Users from './Users';

function App() {
  const Person = { name: "Abir", age: 21, gender: "Male" }
  // const Person1 = { name: "Sabbir", age: 20, gender: "Female" }
  return (
    <>
      <h1>This is my first React app with Vite</h1>
      <Todo />
      <Condition Person={Person} />
      {/* <Condition Person={Person1} /> */}
      <Count />
      {/* <Users /> */}
      <Friends />
    </>
  );
}

export default App;
