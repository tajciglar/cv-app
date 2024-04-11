import React, { useState } from "react";

export default function GeneralInfo({ editable, setGeneralInfo }) {
  const [generalInfoLocal, setGeneralInfoLocal] = useState({
    name: '',
    email: '',
    number: ''
  });

  // Function to handle changes for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfoLocal(prevState => ({
      ...prevState,
      [name]: value
    }));
    setGeneralInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <h3>General Information:</h3>
      <label>Name:<input name="name" type="text" value={generalInfoLocal.name} onChange={handleChange} disabled={!editable} />
      </label>
      <label>Email: <input name="email" type="email" value={generalInfoLocal.email} onChange={handleChange} disabled={!editable} />
      </label>
      <label>
        Phone number:<input name="number" type="tel" value={generalInfoLocal.number} onChange={handleChange} disabled={!editable} />
      </label>
    </div>
  );
}
