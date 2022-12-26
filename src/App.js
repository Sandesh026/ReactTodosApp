import React, { useState } from 'react';

const App = () => {

  const [inputList, setinpuList]= useState("");
  const[items,setItems]=  useState([]);

  const itemEvent= (event) => {
     setinpuList(event.target.value); 
  };

  const listOfItem  =()=>{

    setItems((oldItems )=>{
      return[...oldItems,inputList]
    });

    console.log(items);
    console.log(...items);
    setinpuList("");
  }
  return ( 
  
    <div className="main_div">
      <div className="center_div"><br/> 
      
      <h1>ToDo List</h1>
      <br/>
      <input type="text" placeholder="Add a items"
      value={inputList }
      onChange={itemEvent }/>
      <button onClick={listOfItem}> +   </button>
      <ol>


        {/* <li>{inputList} </li> */}
        {items.map((itemval) =>{
           return<li>{itemval} </li>
        })}
      </ol>
      </div>
    </div>
    
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


