import React, { useState } from "react";

export default function EducationInfo({ editable, setEducationalInfo }) {
    const [educationalInfoLocal, setEducationalInfoLocal] = useState({
        school: '',
        title: '',
        dateOfStudy: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducationalInfoLocal(prevState => ({
            ...prevState,
            [name]: value
        }));
        setEducationalInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="container">
            <h3>Education Information:</h3>
            <label>
                School: <input name="school" type="text" value={educationalInfoLocal.school} onChange={handleChange} disabled={!editable} />
            </label>
            <label>
                Title of study: <input name="title" type="text" value={educationalInfoLocal.title} onChange={handleChange} disabled={!editable} />
            </label>
            <label>
                Date of study: <input name="dateOfStudy" type="date" value={educationalInfoLocal.dateOfStudy} onChange={handleChange} disabled={!editable} />
            </label>
        </div>
    );
}
