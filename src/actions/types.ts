import { Classes, ClassesActionTypes } from '../interfaces/Classes';
import { StudentActionTypes, Students } from '../interfaces/Students';

export const getStudentAction = (students: Students[]): StudentActionTypes => {
    return {
        type: 'GET_STUDENTS',
        payload: students
    };
};


export const getClassesAction = (classes: Classes[]): ClassesActionTypes => {
    return {
        type: 'GET_CLASSES',
        payload: classes
    };
};
