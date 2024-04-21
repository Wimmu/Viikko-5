import { useState } from 'react';
import {Link} from "react-router-dom";

const Upload = () => {

  const [file, setFile] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('File uploaded');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name="tiedosto"
        onChange={(event) =>
          setFile(event.target.value)}/> <br/>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(event) =>
        setName(event.target.value)}/>

      <button className={'m-3 mt-0 p-3 rounded-lg bg-stone-700 text-stone-300'}
              type="submit">Upload
      </button>
      <Link to={"/"}>Back to homepage</Link>
    </form>
  );
}

export default Upload;
