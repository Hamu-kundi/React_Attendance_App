import * as types from "./ActionTypes";

const initialState = {
  students: [],
  student: {},
  loading: false,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_STUDENTS_DATA:
      return {
        ...state,
        students: action.payload,
        loading: false,
      };

    case types.DELETE_STUDENT_DATA:
      return {
        ...state,
        loading: false,
      };

    case types.ADD_NEW_STUDENT:
      return {
        ...state,
        loading: false,
      };

    case types.STUDENT_IS_PRESENT:
      return {
        ...state,
        loading: false,
      };

    case types.STUDENT_IS_ABSENT:
      return {
        ...state,
        loading: false,
      };

    case types.FETCH_SINGLE_STUDENT_DATA:
      return {
        ...state,
        student: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default studentReducer;
