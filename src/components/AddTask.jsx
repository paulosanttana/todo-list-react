import React, { useState } from 'react';

import "./AddTask.css";
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  // RECEBE props e adiciona inputData
  // passando para App.jsx
  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData("")
  }

  return (
    <div className="add-tesk-container">
      <input 
        onChange={handleInputChange}
        value={inputData}
        className='add-task-input' 
        type="text" 
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicioar</Button>
      </div>
    </div>
  );
}

export default AddTask;