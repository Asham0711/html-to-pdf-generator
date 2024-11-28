import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    department: "",
    month: "",
    basic: "",
    hra: "",
    conv: "",
    trans: "",
    cea: "",
    others: "",
    medical: "",
    gross: "",
    pfemployer: "",
    esiemployer: "",
    telephone: "",
    pfemployee: "",
    esiemployee: "",
    loan: "",
    tax: "",
    totalSalary: "",
    totalDeduction: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/display", { state: formData });
  };

  // Array of form fields for dynamic rendering
  const fields = [
    { label: "Name", name: "name" },
    { label: "Designation", name: "designation" },
    { label: "Department", name: "department" },
    { label: "Month", name: "month" },
    { label: "Basic Salary", name: "basic" },
    { label: "HRA", name: "hra" },
    { label: "Conv. Allowance", name: "conv" },
    { label: "Trans. Allowance", name: "trans" },
    { label: "CEA", name: "cea" },
    { label: "Others", name: "others" },
    { label: "Medical", name: "medical" },
    { label: "Gross", name: "gross" },
    { label: "PF Employer", name: "pfemployer" },
    { label: "ESI Employer", name: "esiemployer" },
    { label: "Telephone", name: "telephone" },
    { label: "PF Employee", name: "pfemployee" },
    { label: "ESI Employee", name: "esiemployee" },
    { label: "Loan", name: "loan" },
    { label: "Tax", name: "tax" },
    { label: "Total Salary", name: "totalSalary" },
    { label: "Total Deduction", name: "totalDeduction" },
  ];

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h2 className="text-3xl mb-4">Payment Slip Generator</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 py-5 rounded-3xl w-10/12 mx-auto space-y-6"
      >
        {fields.map((field) => (
          <div key={field.name} className="w-full flex justify-center items-center px-10">
            <label className="text-xl w-[20%]">{field.label}: </label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="rounded-lg py-2 w-[80%] bg-blue-100 px-4"
            />
          </div>
        ))}
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
