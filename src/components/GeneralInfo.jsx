import React, { useState, useEffect } from "react";

export default function GeneralInfo({ editable, setGeneralInfo }) {
  const [generalInfo, setGeneralInfoLocal] = useState({
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
  };

  // Pass the updated generalInfo state to the parent component (App)
  // when editable status changes or generalInfo state changes
  useEffect(() => {
    setGeneralInfo(generalInfo);
  }, [editable, generalInfo, setGeneralInfo]);

  return (
    <div className="container">
      <h3>General Information:</h3>
      <label>Name:<input name="name" type="text" value={generalInfo.name} onChange={handleChange} disabled={!editable} />
      </label>
      <label>Email: <input name="email" type="email" value={generalInfo.email} onChange={handleChange} disabled={!editable} />
      </label>
      <label>
        Phone number:<input name="number" type="tel" value={generalInfo.number} onChange={handleChange} disabled={!editable} />
      </label>
    </div>
  );
}
