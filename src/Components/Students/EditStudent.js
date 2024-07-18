import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
    let navigate = useNavigate();
    const {id} = useParams();

  const [students, setStudents] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const { firstName, lastName, email, department } = students;


  useEffect(() => {
    loadStudents();
  }, []);

  
  const loadStudents = async () => {
    const result = await axios.get(`http://localhost:8080/students/student/${id}`);
      setStudents(result.data);
  };


  const handleInputChange = (e) => {
    setStudents({ ...students, [e.target.name]: e.target.value });
  };


  const saveStudent = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/students/update/${id}`, students);
    navigate("/view-students");
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset">
        <h2 className="mt-5">Edit Student</h2>
      <form onSubmit={(e) => saveStudent(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="department">
            Department
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            required
            value={department}
            onChange={(e) => handleInputChange(e)}
          />
          <div className="col-sm-2  ">
            <button type="submit" className="btn btn-outlin-success btn-lg">
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/view-students"}
              type="submit"
              className="btn btn-outlin-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
