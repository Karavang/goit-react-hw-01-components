// import logo from './logo.svg';
import data2 from "./components/task-2/data.json"
import data3 from "./components/task-3/friends.json"
import data4 from "./components/task-4/transactions.json"
import './App.css';
import Task1 from './components/task-1/task-1';
import Task2 from './components/task-2/task-2';
import Task3 from './components/task-3/task-3';
import Task4 from "./components/task-4/task-4";

function App() {
  return (
    <div>
       <ul className="App">
        <Task1 
              avatar="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" 
              stats={
              {   followers:"2882",
                  views:"222222",
                  likes:"23333",
                }
              }
              username="DnlKalash"
              tag="kalashnichenko"
              location="Poland, Wroclaw"
              
               />
        <Task2 title="Your text" main={data2}/>
        <Task3 fr={data3} />
        <Task4 tr={data4}/>
        
      
    </ul>
    </div>
   
  );
}


export default App;

// username="Kirill" tag="@Love2Dance" location="USA, LA"
