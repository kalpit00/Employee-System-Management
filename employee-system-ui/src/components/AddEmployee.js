import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };
  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b bg-blue-400">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-slate-600 text-sm font-normal">
            First Name
          </label>
          <input
            className="h-10 w-96 border mt-2 px-2 py-2 bg-orange-300"
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-slate-600 text-sm font-normal">
            Last Name
          </label>
          <input
            className="h-10 w-96 border mt-2 px-2 py-2 bg-orange-300"
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-slate-600 text-sm font-normal">
            Email
          </label>
          <input
            className="h-10 w-96 border mt-2 px-2 py-2 bg-orange-300"
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-10"
          >
            Save
          </button>
          <button
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-10"
            onClick={reset}
          >
            Clear
          </button>
          <button
            className="rounded text-white font-semibold bg-yellow-500 hover:bg-yellow-700 py-2 px-10"
            onClick={() => navigate("/employeeList")}
          >
            Fetch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
