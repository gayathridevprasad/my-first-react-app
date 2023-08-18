import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import data from "./Data.json";
import { useState } from "react";
import Table from "./Table";
import Button from "./Button";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); //
  return (
    <div className="templateContainer">
      <div>
        <h1 class="text-3xl underline">Search Filter</h1>
      </div>
      <div className="searchInput_Container">
        <input
          id="searchInput"
          type="text"
          placeholder="Search here.."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div className="template_Container">
        {data
          .filter((item) => {
            if (searchTerm == "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            return (
              <div className="template" key={item.id}>
                <img src={item.image} alt="not found" />
                <h3>{item.title}</h3>
                <h3>${item.price}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

/*function App() {
  const emp = ["sneha", "vinayak", "Allen"];
  const show = true;
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-success">Hello world!</h1>
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700">Click me</button>
      {show && (
        <ul>
          {emp.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      )}
    </div>
  );
}*/
export default App;

/*function App() {
  const emp = [
    { id: 1, name: "A", salary: 300 },
    { id: 3, name: "C", salary: 320 },
    { id: 2, name: "B", salary: 310 },
  ];
  const min = 310;
  const max = 350;
  const empWithMaxSal = emp.reduce((acc, cur) => {
    if (cur.salary >= min && cur.salary <= max) {
      acc.push(cur);
    }
    return acc;
  }, []);
  return (
    <div>
      <h1> Employee with Highest Salary</h1>
      <ul>
      {
        empWithMaxSal.map((e)=>(
       <li>
           <p> Name: {e.name}</p>
           <p>Salary:{e.salary}</p>
       </li>
        ))
      }
      </ul>
    </div>
  );
}
export default App;*/

//import Table from "./Table";
//import Button from "./Button";
// emp data is passed as prop from App.js
//const emp=[{id:1,name:"Sneha",image:"a.gif"}]
/*const EmployeeProfile = ({ emp }) => {
  return (
    <div>
      <h1>Employees List</h1>
      <ul>
        {emp.map((e) => {
          return (
            <li key={e.id}>
              <h1>{e.id}</h1>
              <h1>{e.name.toUpperCase()}</h1>
              <img src={require(`./images/${e.image}`)} alt="not found" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};*/
/*

function App() {
  const [searchTerm, setSearchTerm] = useState("");//
  return (
    <div className="templateContainer">
      <div >
      <h1 class="text-3xl underline">
    Search Filter
      </h1>
      </div>
      <div className="searchInput_Container">
        <input
          id="searchInput"
          type="text"
          placeholder="Search here.."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div className="template_Container">
        {data
          .filter((item) => {
            if (searchTerm == "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            return (
              <div className="template" key={item.id}>
                <img src={item.image} alt="not found" />
                <h3>{item.title}</h3>
                <h3>${item.price}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}
*/
