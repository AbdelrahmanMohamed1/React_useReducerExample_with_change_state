import "./App.css";
import "./theme.css";
import { useReducer, useState } from "react";

const initialData = {
  name: "Boody",
  age: "",
  startCount: 0,
  theme: "light",
};

const reducer = (state, action) => {
  switch(action.type){
    case "CHANGE_NAME":
      // tell js to make a copy of the state and update values of specified keys
      return{...state,name:action.newValue}
    case "CHANGE_AGE":
      return{...state,age:action.newAge}
    case "CHANGE_COUNT":
      return{...state,startCount:action.newCount}
    case "CHANGE_TO_DARK":
      return{...state,theme:action.newDarkValue}    
    default:
      return state  
  }
  
};

function App() {
  const [allData,dispatch]=useReducer(reducer,initialData)
  const [age,setAge]=useState('')
  // const [allData, dispatch] = useReducer(reducer, initialData);

  return (
    <div className={`App ${allData.theme}`}>
      <button style={{ marginBottom: "44px" }}>Toggle Theme</button>

      <div style={{ marginBottom: "44px" }} className="btn-container">
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div>
        <button style={{ marginRight: "26px" }}>Light</button>
        <button onClick={()=>{
          dispatch({
            type:'CHANGE_TO_DARK',
            newDarkValue:"dark"
          })
        }} style={{ marginRight: "26px" }}>Dark</button>
        <button style={{ marginRight: "26px" }}>Grey</button>
        <button>Pink</button>
      </div>

      <h2 style={{ marginTop: "66px" }}>My name is {allData.name}</h2>
      <button
      onClick={()=>{
        dispatch({
          type:"CHANGE_NAME",
          newValue:"ali"
        })
      }}
        
      >
        Change name
      </button>
      <br />
      <br />

      <h2>My Age is {allData.age}</h2>
      <input onChange={(e)=>{
        setAge(e.target.value)
      }} type="text" / >
      <br />
      <button
      onClick={()=>{
        dispatch({
          type:"CHANGE_AGE",
          newAge:age
        })
      }}
        
      >
        Change Age
      </button>

      <br />
      <br />
      <br />
      <br />
      <button onClick={()=>{
        dispatch({
          type:"CHANGE_COUNT",
          newCount:allData.startCount+1
        })
      }}>count is {allData.startCount}</button>
    </div>
  );
}

export default App;
