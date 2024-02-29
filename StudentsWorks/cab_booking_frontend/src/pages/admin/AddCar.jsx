import { useRef } from "react";

import { useState } from "react";

function AddCar() {
  const inputRef = useRef(null);

  const [form, setForm] = useState({
    file: null,
    remarks: "",
  });

  // const handleSubmit = () => {
  //   console.log(inputRef.current.value);
  //   inputRef.current.value = "Mrinmoy";
  // };

  const inputTextChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  console.log(form);

  const submitHandler = (e) => {
    e.preventDefault();
    // api Calling

    // initalital state
    setForm({
      file: null,
      remarks: "",
    });
    inputRef.current.value = null;
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        {/* <input type="text" ref={inputRef} />
        <button type="button" onClick={handleSubmit}>
          submit
        </button> */}
        <input
          type="file"
          name="file"
          id=""
          onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
          ref={inputRef}
        />
        <br />
        <input
          type="text"
          name="remarks"
          id=""
          value={form?.remarks}
          onChange={inputTextChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddCar;
