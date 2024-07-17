import React, { useState } from "react";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });
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
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-slate-600 text-sm font-normal">
            Last Name
          </label>
          <input
            className="h-10 w-96 border mt-2 px-2 py-2 bg-orange-300"
            type="text"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-slate-600 text-sm font-normal">
            Email
          </label>
          <input
            className="h-10 w-96 border mt-2 px-2 py-2 bg-orange-300"
            type="email"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-10">
            Save
          </button>
          <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-10">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
