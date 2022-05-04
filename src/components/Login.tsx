import React, { Fragment, useState, useEffect } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { useDispatch, connect } from "react-redux";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getStudents } from "../actions/index";
import Results from "./Results";

interface Props {
  getStudents: Function;
  students: any;
}

const Login = ({ getStudents, students }: Props) => {
  const [isStudentLoggedIn, setStudentLogin] = useLocalStorage<any>('name', {})
  const [studentRecord] = useState<Map<string, any>>(new Map())
  const [formData, setFormData] = useState({
    name: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    getStudents();
  }, [dispatch]);

  const { name } = formData;

  let studentListwithID: any = {}


  students.map((eachRecord: any) => {
    /** username is case sensitive so we convert to lowercase */
    studentListwithID[eachRecord.id] = {
      id: eachRecord.id,
      ...eachRecord.fields
    }

    return studentRecord.set(eachRecord?.fields?.Name?.toLowerCase(), {
      id: eachRecord.id,
      ...eachRecord.fields
    })
  })

  /**onChange function for the form */
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /**logout function to logout student */
  const logout = () => {
      setStudentLogin("")
    }

  /**onSubmit function to login the student */  
  const onSubmit = () => {
    if(name) {
      const getStudentName = studentRecord.get(name?.toLowerCase())
      if(getStudentName) {
        setStudentLogin(getStudentName)
      }
      else {
        alert("Student doesn't exit")
      }
    }
    else {
      alert("Please enter a valid student name")
    }
  };

  return (
        <Fragment>
          <div className="loginDiv">
            {!isStudentLoggedIn && isStudentLoggedIn !== undefined ? 
              <>
                <span>Student Name:</span>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    className="searchBarInput"
                    onChange={(e) => onChange(e)}   
                  />
                <button onClick={onSubmit} id="loginBtn">Login</button>
              </>
             : 
              <>
              <button onClick={logout} id="logoutBtn">Logout</button>
              {
                isStudentLoggedIn?.Classes?.map((classId: any) => {
                  return (<Results classId={classId}></Results>)
                })
              }
              </>
            }
          </div>
        </Fragment>
  );
};

Login.propTypes = {
  getStudents: PropTypes.func.isRequired,
  students: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  students: state.students.students,
});

export default connect(mapStateToProps, { getStudents })(Login);
