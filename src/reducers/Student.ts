import { StudentActionTypes, GetStudentsStateType } from '../interfaces/Students';


const initialState: GetStudentsStateType = {
  students: []
  
};

export default function (state = initialState, action: StudentActionTypes): GetStudentsStateType {
  const { type, payload } = action;

  switch (type) {
    case 'GET_STUDENTS':
      return {
        ...state,
        students: payload
      };
    default:
      return state;
  }
}