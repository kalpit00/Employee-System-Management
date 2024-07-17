import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-6">
      <div className="h-12">
        <button
          className="rounded bg-purple-950 text-white px-6 py-2 font-semibold"
          onClick={() => navigate("/addEmployee")}
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-slate-400">
            <tr>
              <th className="text-left font-medium text-slate-950 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-slate-950 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-slate-950 uppercase tracking-wider py-3 px-6">
                Email Id
              </th>
              <th className="text-left font-medium text-slate-950 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-950">
                      {employee.firstName}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-950">
                      {employee.lastName}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-950">
                      {employee.emailId}
                    </div>
                  </td>
                  <td className="text-right px-6 py-4 whitespace-nowrap font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 px-4"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 px-4"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
