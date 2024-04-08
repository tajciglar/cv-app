import {useState} from "react";
import Buttons from "./Buttons";

export default function GeneralInfo ({ editable }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

    return (
        <div className="container">
            <h3>General Information:</h3>
          <label>Name:<input type="text" value={name} onChange={(e) => setName(e.target.value)} disabled={!editable}/>
          </label>
          <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value) } disabled={!editable}/>
          </label>
          <label>
            Phone number:<input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} disabled={!editable}/>
          </label>
    
        </div>
      );
}

 