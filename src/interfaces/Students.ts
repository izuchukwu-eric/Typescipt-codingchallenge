export interface Students {
    id: number|string;
    fields: any;
}

export const GET_STUDENTS = 'GET_STUDENTS';

export interface GetStudentsStateType {
    students: Students[];
}

export interface GetStudentsActionType {
    type: typeof GET_STUDENTS;
    payload: Students[];
}
export type StudentActionTypes = GetStudentsActionType;