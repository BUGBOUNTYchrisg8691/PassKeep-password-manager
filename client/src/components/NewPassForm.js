import { useState } from 'react';

import axios from 'axios';

let initialFormVals = {
  len: "",
  specChars: "",
};

function NewPassForm({ newPassword }) {
  const [getFormVals, setFormVals] = useState(initialFormVals);

  const handleChange = (e) => {
    const [name, value] = e.target;
    setFormVals({
      ...getFormVals,
      [name]: value,
    });
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/passgen", getFormVals)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormVals(initialFormVals);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="len">Length</label>
        <input name="len" value={getFormVals.len} onChange={handleChange} />
        <label htmlFor="specChars">Special Characters</label>
        <input
          name="specChars"
          value={getFormVals.specChars}
          onChange={handleChange}
        />
        <button>Generate Password</button>
      </form>
      {newPassword && <p>{newPassword}</p>}
    </>
  );
}

export default NewPassForm;
