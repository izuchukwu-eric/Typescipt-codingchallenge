import { ClassesActionTypes, GetClassStateType } from '../interfaces/Classes';


const initialState: GetClassStateType = {
  classes: []
  
};

export default function (state = initialState, action: ClassesActionTypes): GetClassStateType {
  const { type, payload } = action;

  switch (type) {
    case 'GET_CLASSES':
      return {
        ...state,
        classes: payload
      };
    default:
      return state;
  }
}
