import React from "react";

const Employee = ({ employee, deleteEmployee }) => {
  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-slate-950">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-slate-950">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-slate-950">{employee.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">
          Edit
        </a>
        <button
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Employee;
