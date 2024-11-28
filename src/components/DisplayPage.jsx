// import React from "react";
import { useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js";
import PaySlip from "./PaySlip";

const DisplayPage = () => {
  const location = useLocation();
  const formData = location.state || {}; // Receives data sent from FormPage

  const clickHandler = () => {
    const element = document.querySelector("#invoice");
    html2pdf(element);
  };

  return (
    <div>
      <div id="invoice">
        {/* Pass the received formData as props to PaySlip */}
        <PaySlip formData={formData} />
      </div>
      <div data-html2canvas-ignore className="flex justify-center items-center mt-2">
        <button
            onClick={clickHandler}
            className="py-2 px-4 bg-blue-400 rounded-md"
        >
            Download
        </button>
      </div>
    </div>
  );
};

export default DisplayPage;
