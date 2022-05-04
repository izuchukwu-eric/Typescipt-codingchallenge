import { getClassesAction, getStudentAction } from './types';
import { Dispatch } from 'redux';
import { ClassesActionTypes } from '../interfaces/Classes';
import { getRecordById, getRecord, Tables } from '../api/auth'
import { StudentActionTypes } from '../interfaces/Students';

var students: any = {}
var classes: any = {}


export const getClasses = () => {
    return (dispatch: Dispatch<ClassesActionTypes>) => {
          getRecord(Tables.Classes)
          .then((data: any)=>{
                classes = data.records
                dispatch(getClassesAction(data.records));
          })
      };
};

export const getStudents = () => {
    return (dispatch: Dispatch<StudentActionTypes>) => {
        getRecord(Tables.Students)
        .then((data: any)=>{
            students = data.records
            dispatch(getStudentAction(data.records));
        });
    };
};
    
export const getStudentsByID = (id: string) => {
    return (dispatch: Dispatch<StudentActionTypes>) => {
        let studentdata = students[id]
        if(!studentdata){
            getRecordById(Tables.Students, id)
            .then(({record}: any)=>{
                students[id] = record
                dispatch(getStudentAction(Object.values(students)));
            });
        }
        else {
            dispatch(getStudentAction(Object.values(students)));
        }
    };
};
    
export const getClassesByID = (id: string) => {
    return (dispatch: Dispatch<ClassesActionTypes>) => {
        let classData = classes[id]
        if(!classData){
            getRecordById(Tables.Classes, id)
            .then(({record}: any)=>{              
                classes[id] = record
                dispatch(getClassesAction(Object.values(classes)));
            });
        }
        else {
            dispatch(getClassesAction(Object.values(classes)));
        }
    };
};
