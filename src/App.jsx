import './App.css'
import { useState } from "react";
import EducationInfo from './EducationInfo'
import GeneralInfo from './GeneralInfo'
import PracticalExpeInfo from './PracticalExpeInfo'
import Buttons from './Buttons';

function App() {

  const [editable, setEditable] = useState(true);

  const handleSubmit = () => {
    setEditable(false);
  }
  const handleEdit = () => {
    setEditable(true);
  }

  return (
    <>
      <GeneralInfo editable={editable} ></GeneralInfo>
      <EducationInfo editable={editable} ></EducationInfo>
      <PracticalExpeInfo editable={editable} ></PracticalExpeInfo>
      <Buttons handleSubmit={handleSubmit} handleEdit={handleEdit}></Buttons>
    </>
  )
}

export default App
