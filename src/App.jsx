import { useState } from "react";
import EducationInfo from './components/EducationInfo'
import GeneralInfo from './components/GeneralInfo'
import PracticalExpeInfo from './components/PracticalExpeInfo'
import Buttons from './components/Buttons';
import './app.css';
import Header from "./components/Header";

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
      <Header></Header>
      <div className="content">
        <GeneralInfo editable={editable} ></GeneralInfo>
        <EducationInfo editable={editable} ></EducationInfo>
        <PracticalExpeInfo editable={editable} ></PracticalExpeInfo>
      </div>
      
      <Buttons handleSubmit={handleSubmit} handleEdit={handleEdit}></Buttons>
    </>
  )
}

export default App
