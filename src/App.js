import React, { useState, useEffect } from "react";
import "./App.css";
import UploadForm from "./components/UploadForm";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center m-4">Multi file Upload</h1>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-wrapper">
              <div className="card-body">
                <UploadForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
