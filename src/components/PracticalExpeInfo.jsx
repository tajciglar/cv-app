
import { useState } from "react";
export default function PracticalExpeInfo({ editable, setPracticalInfo}) {
    
    const [practicalInfoLocal, setPracticalInfoLocal] = useState({
        companyName: '',
        title: '',
        text: '',
        startDate: '',
        endDate: ''
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setPracticalInfoLocal(prevState => ({
            ...prevState,
            [name]: value
        }));
        setPracticalInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="container">
            <h3>Practical Experience Information</h3>
            <label>
                Company name: <input type="text" name="companyName" value={practicalInfoLocal.companyName} onChange={handleChange} disabled={!editable} />
            </label>
            <label>
                Position title: <input type="text" name="title" value={practicalInfoLocal.title} onChange={handleChange} disabled={!editable} />
            </label>
            <label>
                Main responsibilities: <textarea name="text" value={practicalInfoLocal.text} onChange={handleChange} disabled={!editable} />
            </label>
            <label>
                Start date: <input type="date" name="startDate" value={practicalInfoLocal.startDate} onChange={handleChange} disabled={!editable} />
            </label>
            <label>
                End Date: <input type="date" name="endDate" value={practicalInfoLocal.endDate} onChange={handleChange} disabled={!editable} />
            </label>
        </div>
    )
}