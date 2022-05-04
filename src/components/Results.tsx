import React, { useEffect } from "react";
import "./Results.css";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {getClassesByID} from "../actions/index"

interface Props {
  getClassesByID: Function
  classId: string
  classes: any
  students: any
}

const Results = ({ classId, students, classes, getClassesByID }: Props) => {

  const dispatch = useDispatch();
    useEffect(() => {
      getClassesByID(classId);
    }, [dispatch]);


  const currentClass = classes.find((eachClass: { id: string; })=>{
      return eachClass.id === classId
  })
  const currentStudents = currentClass?.fields.Students
  return (
    <div>
      <div className="card">
          <div className="name">Name</div>
          <div className="class">{currentClass?.fields.Name}</div>
          <div className="student">Students</div>
          <div>{
              currentStudents?.map((eachStudent: string, key: any) => {
                  let currentStudent = students?.find((stu: { id: string; })=> stu.id === eachStudent)
                  return currentStudent ? <div key={key} className="student-name">{currentStudent.fields.Name}</div> : ""
              })
          }</div>
      </div>
    </div>
  );
}

Results.propTypes = {
  getClassesByID: PropTypes.func.isRequired,
  classes: PropTypes.array.isRequired,
  students: PropTypes.array.isRequired

};

const mapStateToProps = (state: any) => ({
 classes: state.classes.classes,
 students: state.students.students
});

export default connect(mapStateToProps, {getClassesByID})(Results);
