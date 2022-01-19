import logo from './logo.svg';
import './App.css';
import  Header  from "./MyComponents/header";
import {Todos} from  "./MyComponents/Todos.js";
import {Footer} from  "./MyComponents/Footer.js";
import {TodoItems} from "./MyComponents/TodoItems.js";


function App() {
  return (
    <>
    <title>TODO List</title>
    
      <Header searchBar = {true}/>
      <Todos/>
      <Footer/>

    <h3>My Page</h3>
    <h3>My Page</h3>


    </>

  );
}

export default App;
