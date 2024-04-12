import { useState } from "react";
import EducationInfo from './components/EducationInfo'
import GeneralInfo from './components/GeneralInfo'
import PracticalExpeInfo from './components/PracticalExpeInfo'
import Buttons from './components/Buttons';
import './app.css';
import './styles/buttons.css';
import './styles/footer.css';
import './styles/cvExample.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import CVExample from "./components/CVExample";

function App() {

  const [editable, setEditable] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    number: ''
  });
  const [educationalInfo, setEducationalInfo] = useState({
    school: '',
    title: '',
    dateOfStudy: ''
  });

  const [practicalInfo, setPracticalInfo] = useState({
    companyName: '',
    title: '',
    text: '',
    startDate: '',
    endDate: ''
  });

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
        <div className="componentContent">
          <GeneralInfo editable={editable} setGeneralInfo={setGeneralInfo}></GeneralInfo>
          <EducationInfo editable={editable} setEducationalInfo={setEducationalInfo}></EducationInfo>
          <PracticalExpeInfo editable={editable} setPracticalInfo={setPracticalInfo}></PracticalExpeInfo>
          <div>
          <Buttons handleSubmit={handleSubmit} handleEdit={handleEdit}></Buttons>
          </div>
        </div>
        <div className="CVcontent">
          <CVExample generalInfo={generalInfo} educationalInfo={educationalInfo} practicalInfo={practicalInfo}></CVExample> 
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
