import { useState } from "react";
import Buttons from "./Buttons";

export default function EducationInfo ({ editable}) {
    const [school, setSchool] = useState('');
    const [title, setTitle] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState();
   
    return (
        <div className="container">
            <h3>Education Information:</h3>
            <label>
                School: <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} disabled={!editable}></input>
            </label>
            <label>
                Title of study: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} disabled={!editable}></input>
            </label>
            <label>
                Date of study: <input type="date" value={dateOfStudy} onChange={(e) => setDateOfStudy(e.target.value)} disabled={!editable}></input>
            </label>
        </div>
    );
}