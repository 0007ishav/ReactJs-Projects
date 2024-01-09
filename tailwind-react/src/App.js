import './App.css';
import { Card } from './Card';

function App() {
  let myObj = {
    username: "ishav",
    age: 21
  }

  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> This is tailwind.</h1>

    {/* <Card/>
    <Card/> */}

      <Card name = "One" Arr={newArr} someObject = {myObj} btnText="Click me"/>
      <Card name = "two" btnText="Visit me"/>
      
    </>
  );
}

export default App;
