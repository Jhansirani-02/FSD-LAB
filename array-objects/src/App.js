import React from "react";
import TableView from './TableView';
import './index.css';
const App = () => {
  const data =[
    {ID:1,Name:'Abhilasha',Age:20},
    {ID:2,Name:'Jostna',Age:21},
    {ID:3,Name:'Sneha',Age:20},
    {ID:4,Name:'Madhu',Age:23},
    {ID:5,Name:'Urdhva',Age:24},
  ];
  return(
    <div> 
      <h1 style={{ textAlign: 'center', borderBottom: '2px solidblue', paddingTop:'20px',marginBottom:'100px'}}>
        Array of Objects-Table View
      </h1>
      <TableView data={data}/>
    </div>
  );
};
export default App;