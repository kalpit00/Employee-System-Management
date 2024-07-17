import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee.js";

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

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };

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
                <Employee
                  employee={employee}
                  key={employee.id}
                  deleteEmployee={deleteEmployee}
                ></Employee>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
