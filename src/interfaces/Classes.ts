export interface Classes {
    id: number|string;
    fields: any;
}

export const GET_CLASSES = 'GET_CLASSES';

export interface GetClassStateType {
    classes: Classes[];
}

export interface GetClassActionType {
    type: typeof GET_CLASSES;
    payload: Classes[];
}
export type ClassesActionTypes = GetClassActionType;