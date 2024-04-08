import Buttons from "./Buttons"

import { useState } from "react";
export default function PracticalExpeInfo({ editable}) {
    const [companyName, setCompanyName] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [startDate, setStartDate] = useState();
    const [endDAte, setEndDAte] = useState();
    

    return (
        <div className="container">
            <h3>Practical Experience Information</h3>
            <label>
                Company name: <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} disabled={!editable}></input>
            </label>
            <label>
                Position title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} disabled={!editable}></input>
            </label>
            <label>
                Main responsibilites: <textarea type="text" value={text} onChange={(e) => setText(e.target.value)} disabled={!editable}></textarea>
            </label>
           
             <label>
                Start date: <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} disabled={!editable}></input> 
            </label>
            <label>
                End Date: <input type="date" value={endDAte} onChange={(e) => setEndDAte(e.target.value)} disabled={!editable}></input>
            </label>
        </div>
    )
}