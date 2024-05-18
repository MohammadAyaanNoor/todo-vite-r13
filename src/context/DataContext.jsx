import React, { createContext } from 'react'
import { useState } from 'react';



export const datacontext = createContext(null)
const DataContext = (props) => {
    const [tasks, settasks] = useState(
      [{ title: "Task 1", completed: false }]
    );
    
  return (
    <datacontext.Provider value={[tasks,settasks]}>
      {props.children}
    </datacontext.Provider>
  )
}

export default DataContext