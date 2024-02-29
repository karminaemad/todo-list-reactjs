import { useRef , useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

function App() {
  const [x , setx] =useState([])

  const inputRef = useRef()

  const add = () => {
    const value = inputRef.current.value
    const newData = {completed : false , value}
    setx([...x , newData])
    inputRef.current.value =""
  }
  const itemDone = (index) => {
    const newx = [...x]
    x[index].completed = !x[index].completed
    setx(newx)
  }

  const toDelete = (index) => {
    const newx = [...x]
    newx.splice(index , 1)
    setx(newx)
  }
  return (
    <div className="App">
      
      <h2 class="title">To Do List</h2>
      <input class="input-style" ref={inputRef} placeholder='Enter New Task'></input>
      <button class="btn" onClick={add}>add</button>
      <ul>
        {
          x.map(({value , completed} , index)=>{
            return <div class="content"> <li className={completed ? "diffstyle" : ""} onClick={ () => itemDone(index)}>{value}</li>
              <span onClick={ () => toDelete(index)}><FontAwesomeIcon icon={faCircleXmark} /></span>
              </div>
          })
        }
      </ul>
    </div>
  );
}

export default App;
