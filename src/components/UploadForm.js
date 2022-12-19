import React, { useState } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../config/constants";

const UploadForm = () => {
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);
  const [uploaded, setUploaded] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Form data structure to hold the input form values */

    let formdata = new FormData();
  
    for (let key in files) {
      formdata.append("files", files[key]);
      console.log(formdata, "formdata");
    }

    formdata.append("name", name);

    /* Posting form data into the backend */

    axios
      .post(`${API_ENDPOINT}/api/file/create`, formdata, {
        onUploadProgress: (data) => {
          setUploaded(Math.round((data.loaded / data.total) * 100));
        },
      })
      .then(() => {
        console.log("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error while uploading!");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="m-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="files" className="m-2">Upload or Drag and Drop Files</label>
          <input
            type="file"
            name="files"
            id="files"
            multiple
            className="form-control file-input"
            onChange={(e) => {
              setFiles(e.target.files);
            }}
            onDragEnter={(e) => {
              setFiles(e.target.files);
            }}
            onDrop={(e) => {
              setFiles(e.target.files);
            }}
            onDragStart={(e) => {
              setFiles(e.target.files);
            }}
            onDragLeave={(e) => {
              setFiles(e.target.files);
            }}
          />
        </div>

        {uploaded && (
          <div className="progress mt-2">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={uploaded}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${uploaded}%` }}
            >
              {`${uploaded}%`}
            </div>
          </div>
        )}
        <button type="submit" className="btn submit-btn my-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default UploadForm;
